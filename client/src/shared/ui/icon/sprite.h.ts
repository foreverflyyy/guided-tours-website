export interface SpritesMap {
    common:
        | 'burger'
        | 'check'
        | 'edit'
        | 'filters'
        | 'link'
        | 'play'
        | 'profile'
        | 'search'
        | 'share'
        | 'sort'
        | 'star'
        | 'volume-high'
        | 'volume-slash';
    social: 'facebook' | 'gmail' | 'telegram' | 'viber' | 'vk' | 'whatsapp';
}

export const SPRITES_META: { [K in keyof SpritesMap]: SpritesMap[K][] } = {
    common: [
        'burger',
        'check',
        'edit',
        'filters',
        'link',
        'play',
        'profile',
        'search',
        'share',
        'sort',
        'star',
        'volume-high',
        'volume-slash',
    ],
    social: ['facebook', 'gmail', 'telegram', 'viber', 'vk', 'whatsapp'],
};