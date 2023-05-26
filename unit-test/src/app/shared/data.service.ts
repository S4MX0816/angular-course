export class DataService {
  getDetails() {
    const resultPromise = new Promise<string>((resolve) => {
      setTimeout(() => resolve('Data'), 1500);
    });

    return resultPromise;
  }
}
