export interface TopAnimeInterface {
  pagination: Pagination;
  data: Datum[];
}

interface Datum {
  mal_id: number;
  url: string;
  images: Images;
  trailer: Trailer;
  approved: boolean;
  titles: Title[];
  title: string;
  title_english: string | null;
  title_japanese: string | null;
  title_synonyms: string[];
  type: string;
  source: string;
  episodes: number;
  status: string;
  airing: boolean;
  aired: Aired;
  duration: string;
  rating: string;
  score: number | null;
  scored_by: number | null;
  rank: number | null;
  popularity: number | null;
  members: number;
  favorites: number;
  synopsis: string;
  background: string;
  season: null | string;
  year: null | number;
  broadcast: Broadcast;
  producers: Producer[];
  licensors: Producer[];
  studios: Producer[];
  genres: Producer[];
  explicit_genres: any[];
  themes: Producer[];
  demographics: Producer[];
}

interface Producer {
  mal_id: number;
  type: string;
  name: string;
  url: string;
}

interface Broadcast {
  day: null | string;
  time: null | string;
  timezone: null | string;
  string: null | string;
}

interface Aired {
  from: string | null;
  to: null | string;
  prop: Prop | null;
  string: string | null;
}

interface Prop {
  from: From;
  to: To;
}

interface To {
  day: null | number;
  month: null | number;
  year: null | number;
}

interface From {
  day: number;
  month: number;
  year: number;
}

interface Title {
  type: string;
  title: string;
}

interface Trailer {
  youtube_id: null | string;
  url: null | string;
  embed_url: null | string;
  images: Images2;
}

interface Images2 {
  image_url: null | string;
  small_image_url: null | string;
  medium_image_url: null | string;
  large_image_url: null | string;
  maximum_image_url: null | string;
}

interface Images {
  jpg: Jpg;
  webp: Jpg;
}

interface Jpg {
  image_url: string | null;
  small_image_url: string | null;
  large_image_url: string | null;
}

interface Pagination {
  last_visible_page: number;
  has_next_page: boolean;
  current_page: number;
  items: Items;
}

interface Items {
  count: number;
  total: number;
  per_page: number;
}
