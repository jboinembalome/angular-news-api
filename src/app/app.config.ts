// Types
export type Scheme = 'dark' | 'light';
export type Theme = 'default' | 'orangeSofa' | 'teal' | 'rose' | 'purple' | 'amber';

/**
 * AppConfig interface. Update this interface to strictly type the configuration
 * object.
 */
export interface AppConfig {
    scheme: Scheme;
    theme: Theme;
}

/**
 * Default configuration for the all the application. This object is used by
 * ConfigService to set the default configuration when we want.
 */
export const appConfig: AppConfig = {
    scheme: 'light',
    theme: 'orangeSofa'
};
