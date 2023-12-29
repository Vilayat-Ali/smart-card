export type Point = {
  x: number;
  y: number;
};

export class Calculation {
  public static distance_from_origin(x: number, y: number): number {
    return Math.sqrt(x ** 2 + y ** 2);
  }

  public static distance_from_point(source: Point, target: Point): number {
    return Math.sqrt((target.x - source.x) ** 2 + (target.y - source.y) ** 2);
  }
}
