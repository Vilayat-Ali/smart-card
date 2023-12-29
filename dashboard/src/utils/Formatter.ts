export class Formatter {
  public static formatNumber(num: number): string {
    const formatter: Intl.NumberFormat = Intl.NumberFormat("en-us", {
      notation: "compact",
    });
    return formatter.format(num);
  }
}
