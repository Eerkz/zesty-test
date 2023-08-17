export interface PlatformSection {
  lang_id: string;
  title: string;
  layout: string;
  sub_parent:string;
  meta_keywords: string | null;
  meta_description: string | null;
  text_content: string | null;
  sort_order: string;
  media_content: string;
  meta_title: string;
  uri: string | null;
  rich_media: string | null;
}
