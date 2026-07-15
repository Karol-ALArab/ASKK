export interface Project {
  id: number,
  title: string,
  desc: string,
  imgLink: string,
  category: string,
  imgLinkList?: string[],
  processImgLink?: string[],
  woodType?: string,
  finishType?: string
}
