"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useStyles = void 0;
const core_1 = require("@mantine/core");
exports.useStyles = (0, core_1.createStyles)((theme, _params, getRef) => ({
    wrapper: {
        backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[1],
        maxWidth: 400,
        width: '100%',
        height: 180,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 'auto',
        marginRight: 'auto',
        borderRadius: theme.radius.sm,
        [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
            [`& .${getRef('child')}`]: {
                fontSize: theme.fontSizes.xs
            }
        }
    },
    child: {
        ref: getRef('child'),
        backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.white,
        padding: theme.spacing.md,
        borderRadius: theme.radius.sm,
        boxShadow: theme.shadows.md,
        color: theme.colorScheme === 'dark' ? theme.white : theme.black
    }
}));
//# sourceMappingURL=mantineStyles.js.map