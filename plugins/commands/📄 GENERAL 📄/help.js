const config = {
    name: "help",
    _name: {
        "ar_SY": "الاوامر"
    },
    aliases: ["cmds", "commands"],
    version: "1.0.3",
    description: "Show all commands or command details",
    usage: "[command] (optional)",
    credits: "XaviaTeam"
}

const langData = {
    "en_US": {
        "help.list": "{list}\n\n⇒ Total: {total} commands\n⇒ Use {syntax} [command] to get more information about a command.",
        "help.commandNotExists": "Command {command} does not exists.",
        "help.commandDetails": `
            ⇒ Name: {name}
            ⇒ Aliases: {aliases}
            ⇒ Version: {version}
            ⇒ Description: {description}
            ⇒ Usage: {usage}
            ⇒ Permissions: {permissions}
            ⇒ Category: {category}
            ⇒ Cooldown: {cooldown}
            ⇒ Credits: {credits}
        `,
        "0": "Member",
        "1": "Group Admin",
        "2": "Bot Admin"
    },
    "vi_VN": {
        "help.list": "- 📄 𝗖𝗶𝗻𝗱𝘆 𝗛𝗲𝗹𝗽 𝗟𝗶𝘀𝘁📄 -\n{list}\n\n⇒ 👾𝗧𝗼̂̉𝗻𝗴 𝗰𝗼̣̂𝗻𝗴: {total} lệnh\n⇒ 𝗦𝘂̛̉ 𝗱𝘂̣𝗻𝗴 {syntax} [lệnh] đ𝗲̂̉ 𝘅𝗲𝗺 𝘁𝗵𝗲̂𝗺 𝘁𝗵𝗼̂𝗻𝗴 𝘁𝗶𝗻 𝘃𝗲̂̀ 𝗹𝗲̣̂𝗻𝗵.",
        "help.commandNotExists": "𝐋𝐞̣̂𝐧𝐡 {command} 𝐤𝐡𝐨̂𝐧𝐠 𝐭𝐨̂̀𝐧 𝐭𝐚̣𝐢.",
        "help.commandDetails": `
            ⇒ 𝐓𝐞̂𝐧: {name}
            ⇒ 𝐓𝐞̂𝐧 𝐤𝐡𝐚́𝐜: {aliases}
            ⇒ 𝐏𝐡𝐢𝐞̂𝐧 𝐛𝐚̉𝐧: {version}
            ⇒ 𝐌𝐨̂ 𝐭𝐚̉: {description}
            ⇒ 𝐂𝐚́𝐜𝐡 𝐬𝐮̛̉ 𝐝𝐮̣𝐧𝐠: {usage}
            ⇒ 𝐐𝐮𝐲𝐞̂̀𝐧 𝐡𝐚̣𝐧: {permissions}
            ⇒ 𝐓𝐡𝐞̂̉ 𝐥𝐨𝐚̣𝐢: {category}
            ⇒ 𝐓𝐡𝐨̛̀𝐢 𝐠𝐢𝐚𝐧 𝐜𝐡𝐨̛̀: {cooldown}
            ⇒ 𝐍𝐠𝐮̛𝐨̛̀𝐢 𝐯𝐢𝐞̂́𝐭: {credits}
        `,
        "0": "Thành viên",
        "1": "Quản trị nhóm",
        "2": "Quản trị bot"
    },
    "ar_SY": {
        "help.list": "{list}\n\n⇒ المجموع: {total} الاوامر\n⇒ يستخدم {syntax} [امر] لمزيد من المعلومات حول الأمر.",
        "help.commandNotExists": "امر {command} غير موجود.",
        "help.commandDetails": `
            ⇒ اسم: {name}
            ⇒ اسم مستعار: {aliases}
            ⇒ وصف: {description}
            ⇒ استعمال: {usage}
            ⇒ الصلاحيات: {permissions}
            ⇒ فئة: {category}
            ⇒ وقت الانتظار: {cooldown}
            ⇒ الاعتمادات: {credits}
        `,
        "0": "عضو",
        "1": "إدارة المجموعة",
        "2": "ادارة البوت"
    }
}

function getCommandName(commandName) {
    if (global.plugins.commandsAliases.has(commandName)) return commandName;

    for (let [key, value] of global.plugins.commandsAliases) {
        if (value.includes(commandName)) return key;
    }

    return null
}

async function onCall({ message, args, getLang, userPermissions, prefix }) {
    const { commandsConfig } = global.plugins;
    const commandName = args[0]?.toLowerCase();

    if (!commandName) {
        let commands = {};
        const language = data?.thread?.data?.language || global.config.LANGUAGE || 'en_US';
        for (const [key, value] of commandsConfig.entries()) {
            if (!!value.isHidden) continue;
            if (!!value.isAbsolute ? !global.config?.ABSOLUTES.some(e => e == message.senderID) : false) continue;
            if (!value.hasOwnProperty("permissions")) value.permissions = [0, 1, 2];
            if (!value.permissions.some(p => userPermissions.includes(p))) continue;
            if (!commands.hasOwnProperty(value.category)) commands[value.category] = [];
            commands[value.category].push(value._name && value._name[language] ? value._name[language] : key);
        }

        let list = Object.keys(commands)
            .map(category => `⌈ ${category.toUpperCase()} ⌋\n${commands[category].join(", ")}`)
            .join("\n\n");

        message.reply(getLang("help.list", {
            total: Object.values(commands).map(e => e.length).reduce((a, b) => a + b, 0),
            list,
            syntax: message.args[0].toLowerCase()
        }));
    } else {
        const command = commandsConfig.get(getCommandName(commandName, commandsConfig));
        if (!command) return message.reply(getLang("help.commandNotExists", { command: commandName }));

        const isHidden = !!command.isHidden;
        const isUserValid = !!command.isAbsolute ? global.config?.ABSOLUTES.some(e => e == message.senderID) : true;
        const isPermissionValid = command.permissions.some(p => userPermissions.includes(p));
        if (isHidden || !isUserValid || !isPermissionValid)
            return message.reply(getLang("help.commandNotExists", { command: commandName }));

        message.reply(getLang("help.commandDetails", {
            name: command.name,
            aliases: command.aliases.join(", "),
            version: command.version || "1.0.0",
            description: command.description || '',
            usage: `${prefix}${commandName} ${command.usage || ''}`,
            permissions: command.permissions.map(p => getLang(String(p))).join(", "),
            category: command.category,
            cooldown: command.cooldown || 3,
            credits: command.credits || ""
        }).replace(/^ +/gm, ''));
    }
}

export default {
    config,
    langData,
    onCall
}
