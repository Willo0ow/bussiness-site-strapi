import type { Schema, Attribute } from '@strapi/strapi';

export interface BaseCard extends Schema.Component {
  collectionName: 'components_base_cards';
  info: {
    displayName: 'card';
    icon: 'cast';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.Text;
    image: Attribute.String;
    imageAlt: Attribute.String;
  };
}

export interface BaseImage extends Schema.Component {
  collectionName: 'components_base_images';
  info: {
    displayName: 'image';
    icon: 'picture';
  };
  attributes: {
    url: Attribute.String;
    altText: Attribute.String;
  };
}

export interface BaseLink extends Schema.Component {
  collectionName: 'components_base_links';
  info: {
    displayName: 'link';
    icon: 'link';
    description: '';
  };
  attributes: {
    path: Attribute.String;
    label: Attribute.String;
    route: Attribute.Relation<'base.link', 'oneToOne', 'api::route.route'>;
  };
}

export interface BaseTextWithTitle extends Schema.Component {
  collectionName: 'components_base_text_with_titles';
  info: {
    displayName: 'TextWithTitle';
    icon: 'archive';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    linksTo: Attribute.Relation<
      'base.text-with-title',
      'oneToOne',
      'api::route.route'
    >;
    description: Attribute.RichText;
  };
}

export interface CommonCta extends Schema.Component {
  collectionName: 'components_common_ctas';
  info: {
    displayName: 'Cta';
    icon: 'apps';
  };
  attributes: {
    title: Attribute.String;
    desscription: Attribute.Text;
    ctaLink: Attribute.Component<'base.link'>;
  };
}

export interface CommonExpandable extends Schema.Component {
  collectionName: 'components_common_expandables';
  info: {
    displayName: 'Expandable';
    icon: 'bulletList';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    items: Attribute.Component<'base.text-with-title', true>;
  };
}

export interface CommonFeaturedItems extends Schema.Component {
  collectionName: 'components_common_featured_items';
  info: {
    displayName: 'Featured Items';
    icon: 'information';
    description: '';
  };
  attributes: {
    header: Attribute.String;
    title: Attribute.String;
    content: Attribute.Text;
    ctaLink: Attribute.Component<'base.link'>;
    projects: Attribute.Relation<
      'common.featured-items',
      'oneToMany',
      'api::project.project'
    >;
  };
}

export interface CommonGridOfCards extends Schema.Component {
  collectionName: 'components_common_grid_of_cards';
  info: {
    displayName: 'Grid of Cards';
    icon: 'collapse';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.Text;
    numberOfColumns: Attribute.Integer;
    backgroundColor: Attribute.Enumeration<['red', 'zinc']>;
    moreLink: Attribute.Component<'base.link'>;
    projects: Attribute.Relation<
      'common.grid-of-cards',
      'oneToMany',
      'api::project.project'
    >;
  };
}

export interface CommonPartnersLogos extends Schema.Component {
  collectionName: 'components_common_partners_logos';
  info: {
    displayName: 'PartnersLogos';
    icon: 'collapse';
  };
  attributes: {
    title: Attribute.String;
    logos: Attribute.Media;
    bottomLink: Attribute.Component<'base.link'>;
  };
}

export interface CommonTestimonials extends Schema.Component {
  collectionName: 'components_common_testimonials';
  info: {
    displayName: 'Testimonials';
    icon: 'thumbUp';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.Text;
    withImage: Attribute.Boolean;
    items: Attribute.Relation<
      'common.testimonials',
      'oneToMany',
      'api::testimonial.testimonial'
    >;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'base.card': BaseCard;
      'base.image': BaseImage;
      'base.link': BaseLink;
      'base.text-with-title': BaseTextWithTitle;
      'common.cta': CommonCta;
      'common.expandable': CommonExpandable;
      'common.featured-items': CommonFeaturedItems;
      'common.grid-of-cards': CommonGridOfCards;
      'common.partners-logos': CommonPartnersLogos;
      'common.testimonials': CommonTestimonials;
    }
  }
}
