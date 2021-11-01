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
                        comment: 'Management of the News API which is used in several feature modules',
                        children: [
                            { name: 'models', icon: 'folder' },
                            { name: 'services', icon: 'folder' },
                            { name: 'api.module.ts', icon: 'typescript' },
                            { name: 'configuration.ts', icon: 'typescript', comment: 'Configuration for HTTP requests' }
                        ]
                    },
                    {
                        name: 'core',
                        icon: 'folder',
                        comment: 'The core of the application. Usually this folder contains logs, authentication and guards',
                        children: [
                            { name: 'config', icon: 'folder', comment: 'Contains a module to interact with the AppConfig' },
                            { name: 'icons', icon: 'folder', comment: 'Contains a module to register icons and use them with the <mat-icon> component' },
                            { name: 'core.module.ts', icon: 'typescript' },
                        ]
                    },
                    {
                        name: 'layout',
                        icon: 'folder',
                        comment: 'Application layout, sidenav, toolbar et so on',
                        children: [
                            { name: 'common', icon: 'folder', comment: 'Contains all components that are shared in the layout' },
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
                        comment: 'All the feature modules of the application',
                        children: [
                            { name: 'home', icon: 'folder' },
                            { name: 'top-news', icon: 'folder' },
                            { name: 'tech-news', icon: 'folder' }
                        ]
                    },
                    {
                        name: 'shared',
                        icon: 'folder',
                        comment: 'Contains everything that is reusable, such as components, directives and pipes',
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
                    { name: 'app.config.ts', icon: 'typescript', comment: 'Default configuration for all the application' },
                    { name: 'app.module.ts', icon: 'typescript' },
                    { name: 'app.routing.ts', icon: 'typescript' },
                ]
            },
            {
                name: 'assets',
                icon: 'folder',
                children: [
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
                comment: 'Contains all the libraries that used in the project'
            },
            {
                name: 'tailwind.config.json',
                icon: 'json',
                comment: 'This file is used to configure the generated classes by Tailwind'
            }
        ]
    }
];