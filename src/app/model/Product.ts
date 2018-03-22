export class Product {
  private id: number;
  public name: String;
  public cost: String;
  public description: String;

  constructor(private nameParam: String, private costParam: String, private descriptionParam: String) {
    this.id = 0;
    this.name = nameParam;
    this.cost = costParam;
    this.description = descriptionParam;
  }

}
