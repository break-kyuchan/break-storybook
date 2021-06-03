export interface cardGradeListTopType {
  title: string;
  subTitle: string;
}
export interface cardGradeListBottomType {
  count: number;
  minPrice: string;
  maxPrice: string;
  lastPrice: string;
}
export interface cardGradeListType extends cardGradeListTopType, cardGradeListBottomType {
  id: number;
}
