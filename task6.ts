function kvadrat(a: number, b: number): void {
    for (let i = Math.ceil(Math.sqrt(a)); i * i <= b; i++) {
      console.log(i +' -> '+ i*i);
    }
}
kvadrat(3, 25)