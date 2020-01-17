export class LandMark {
  public name: string;
  public shortDesc: string;
  public imagePath: string;
  public detailDesc: string;

  constructor(name: string, desc: string, imagePath: string, detailDesc: string) {
    this.name = name;
    this.shortDesc = desc;
    this.imagePath = imagePath;
    this.detailDesc = detailDesc;
  }
}
