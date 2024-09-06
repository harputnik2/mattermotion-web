type ArtPieceCommon = {
  id: number;
  item_name: string;
  description: string;
  poster: {
    guid: string;
  };
}

export type Visualization = ArtPieceCommon & {
  visualization_images: {
    guid: string;
  }[];
}

export type Animation = ArtPieceCommon & {
  animation_src: {
    guid: string;
  };
}

export type VirtualTour = ArtPieceCommon &  {
  vt_src: string;
}

export type ArtPiece = Visualization | Animation | VirtualTour;