// Types
export type Scheme = 'auto' | 'dark' | 'light';
export type Theme = 'theme-default' | 'theme-orangeSofa' | 'theme-teal' | 'theme-rose' | 'theme-purple' | 'theme-amber';
export type Screens = { [key: string]: string };

/**
 * AppConfig interface. Update this interface to strictly type the configuration
 * object.
 */
export interface AppConfig {
    scheme: Scheme;
    screens: Screens;
    theme: Theme;
}

/**
 * Default configuration for the all the application. This object is used by
 * ConfigService to set the default configuration when we want.
 */
export const appConfig: AppConfig = {
    scheme: 'auto',
    screens: {
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        // eslint-disable-next-line @typescript-eslint/naming-convention
        '2xl': '1536px'
    },
    theme: 'theme-orangeSofa'
};
