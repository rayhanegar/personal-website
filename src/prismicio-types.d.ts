// Code generated by Slice Machine. DO NOT EDIT.

import type * as prismic from "@prismicio/client";

type Simplify<T> = { [KeyType in keyof T]: T[KeyType] };

type WorkpostDocumentDataSlicesSlice =
  | GallerySlice
  | WorkDescriptionSlice
  | WorkHeroSlice;

/**
 * Content for WorkPost documents
 */
interface WorkpostDocumentData {
  /**
   * Slice Zone field in *WorkPost*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: workpost.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<WorkpostDocumentDataSlicesSlice> /**
   * Meta Description field in *WorkPost*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A brief summary of the page
   * - **API ID Path**: workpost.meta_description
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */;
  meta_description: prismic.KeyTextField;

  /**
   * Meta Image field in *WorkPost*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: workpost.meta_image
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  meta_image: prismic.ImageField<never>;

  /**
   * Meta Title field in *WorkPost*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A title of the page used for social media and search engines
   * - **API ID Path**: workpost.meta_title
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_title: prismic.KeyTextField;
}

/**
 * WorkPost document from Prismic
 *
 * - **API ID**: `workpost`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type WorkpostDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<
    Simplify<WorkpostDocumentData>,
    "workpost",
    Lang
  >;

export type AllDocumentTypes = WorkpostDocument;

/**
 * Primary content in *Gallery → Items*
 */
export interface GallerySliceDefaultItem {
  /**
   * GalleryImage field in *Gallery → Items*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: gallery.items[].image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  image: prismic.ImageField<never>;
}

/**
 * Default variation for Gallery Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type GallerySliceDefault = prismic.SharedSliceVariation<
  "default",
  Record<string, never>,
  Simplify<GallerySliceDefaultItem>
>;

/**
 * Slice variation for *Gallery*
 */
type GallerySliceVariation = GallerySliceDefault;

/**
 * Gallery Shared Slice
 *
 * - **API ID**: `gallery`
 * - **Description**: Gallery
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type GallerySlice = prismic.SharedSlice<
  "gallery",
  GallerySliceVariation
>;

/**
 * Primary content in *WorkDescription → Items*
 */
export interface WorkDescriptionSliceDefaultItem {
  /**
   * Paragraph field in *WorkDescription → Items*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: work_description.items[].paragraph
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  paragraph: prismic.RichTextField;

  /**
   * DataField field in *WorkDescription → Items*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: work_description.items[].datafield
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  datafield: prismic.RichTextField;

  /**
   * DataValue field in *WorkDescription → Items*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: work_description.items[].datavalue
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  datavalue: prismic.RichTextField;
}

/**
 * Default variation for WorkDescription Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type WorkDescriptionSliceDefault = prismic.SharedSliceVariation<
  "default",
  Record<string, never>,
  Simplify<WorkDescriptionSliceDefaultItem>
>;

/**
 * Slice variation for *WorkDescription*
 */
type WorkDescriptionSliceVariation = WorkDescriptionSliceDefault;

/**
 * WorkDescription Shared Slice
 *
 * - **API ID**: `work_description`
 * - **Description**: WorkDescription
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type WorkDescriptionSlice = prismic.SharedSlice<
  "work_description",
  WorkDescriptionSliceVariation
>;

/**
 * Primary content in *WorkHero → Primary*
 */
export interface WorkHeroSliceDefaultPrimary {
  /**
   * Title field in *WorkHero → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: work_hero.primary.title
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  title: prismic.RichTextField;

  /**
   * Image field in *WorkHero → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: work_hero.primary.image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  image: prismic.ImageField<never>;
}

/**
 * Default variation for WorkHero Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type WorkHeroSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<WorkHeroSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *WorkHero*
 */
type WorkHeroSliceVariation = WorkHeroSliceDefault;

/**
 * WorkHero Shared Slice
 *
 * - **API ID**: `work_hero`
 * - **Description**: WorkHero
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type WorkHeroSlice = prismic.SharedSlice<
  "work_hero",
  WorkHeroSliceVariation
>;

declare module "@prismicio/client" {
  interface CreateClient {
    (
      repositoryNameOrEndpoint: string,
      options?: prismic.ClientConfig,
    ): prismic.Client<AllDocumentTypes>;
  }

  namespace Content {
    export type {
      WorkpostDocument,
      WorkpostDocumentData,
      WorkpostDocumentDataSlicesSlice,
      AllDocumentTypes,
      GallerySlice,
      GallerySliceDefaultItem,
      GallerySliceVariation,
      GallerySliceDefault,
      WorkDescriptionSlice,
      WorkDescriptionSliceDefaultItem,
      WorkDescriptionSliceVariation,
      WorkDescriptionSliceDefault,
      WorkHeroSlice,
      WorkHeroSliceDefaultPrimary,
      WorkHeroSliceVariation,
      WorkHeroSliceDefault,
    };
  }
}