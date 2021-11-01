import { ProjectTreeNode } from "./models/project-tree.model";

export const PROJECT_TREE_DATA: ProjectTreeNode[] = [
    {
        name: 'src',
        icon: 'folder',
        children: [
            {
                name: 'app',
                icon: 'folder',
                children: [
                    {
                        name: 'api',
                        icon: 'folder',
                        comment: 'HOME_PROJECT_STRUCTURE.COMMENT_API_FOLDER',
                        children: [
                            { name: 'models', icon: 'folder' },
                            { name: 'services', icon: 'folder' },
                            { name: 'api.module.ts', icon: 'typescript' },
                            { name: 'configuration.ts', icon: 'typescript', comment: 'HOME_PROJECT_STRUCTURE.COMMENT_CONFIGURATION_FILE' }
                        ]
                    },
                    {
                        name: 'core',
                        icon: 'folder',
                        comment: 'HOME_PROJECT_STRUCTURE.COMMENT_CORE_FOLDER',
                        children: [
                            { name: 'config', icon: 'folder', comment: 'HOME_PROJECT_STRUCTURE.COMMENT_CONFIG_FOLDER' },
                            { name: 'icons', icon: 'folder', comment: 'HOME_PROJECT_STRUCTURE.COMMENT_ICONS_FOLDER' },
                            { name: 'core.module.ts', icon: 'typescript' },
                        ]
                    },
                    {
                        name: 'layout',
                        icon: 'folder',
                        comment: 'HOME_PROJECT_STRUCTURE.COMMENT_LAYOUT_FOLDER',
                        children: [
                            { name: 'common', icon: 'folder', comment: 'HOME_PROJECT_STRUCTURE.COMMENT_COMMON_FOLDER' },
                            { name: 'sidenav', icon: 'folder' },
                            { name: 'toolbar', icon: 'folder' },
                            { name: 'layout.component.html', icon: 'html' },
                            { name: 'layout.component.ts', icon: 'typescript' },
                            { name: 'layout.module.ts', icon: 'typescript' }
                        ]
                    },
                    {
                        name: 'modules',
                        icon: 'folder',
                        comment: 'HOME_PROJECT_STRUCTURE.COMMENT_MODULES_FOLDER',
                        children: [
                            { name: 'home', icon: 'folder' },
                            { name: 'top-news', icon: 'folder' },
                            { name: 'tech-news', icon: 'folder' }
                        ]
                    },
                    {
                        name: 'shared',
                        icon: 'folder',
                        comment: 'HOME_PROJECT_STRUCTURE.COMMENT_SHARED_FOLDER',
                        children: [
                            { name: 'components', icon: 'folder' },
                            { name: 'material', icon: 'folder' },
                            { name: 'tailwind', icon: 'folder' },
                            { name: 'shared.module.ts', icon: 'typescript' },
                        ]
                    },
                    { name: 'app.component.html', icon: 'html' },
                    { name: 'app.component.scss', icon: 'sass' },
                    { name: 'app.component.spec.ts', icon: 'typescript' },
                    { name: 'app.component.ts', icon: 'typescript' },
                    { name: 'app.config.ts', icon: 'typescript', comment: 'HOME_PROJECT_STRUCTURE.COMMENT_APP_CONFIG_FILE' },
                    { name: 'app.module.ts', icon: 'typescript' },
                    { name: 'app.routing.ts', icon: 'typescript' },
                ]
            },
            {
                name: 'assets',
                icon: 'folder',
                children: [
                    {
                        name: 'i18n',
                        icon: 'folder',
                        comment: 'HOME_PROJECT_STRUCTURE.COMMENT_I18N_FOLDER'
                    },
                    {
                        name: 'images',
                        icon: 'folder'
                    },
                    {
                        name: 'icons',
                        icon: 'folder'
                    }
                ]
            },
            {
                name: 'environments',
                icon: 'folder',
                children: [
                    { name: 'environment.prod.ts', icon: 'typescript' },
                    { name: 'environment.ts', icon: 'typescript' }
                ]
            },
            {
                name: 'index.html',
                icon: 'html'
            },
            {
                name: 'angular.json',
                icon: 'json'
            },
            {
                name: 'package.json',
                icon: 'json',
                comment: 'HOME_PROJECT_STRUCTURE.COMMENT_PACKAGE_FILE'
            },
            {
                name: 'tailwind.config.json',
                icon: 'json',
                comment: 'HOME_PROJECT_STRUCTURE.COMMENT_TAILWIND_CONFIG_FILE'
            }
        ]
    }
];