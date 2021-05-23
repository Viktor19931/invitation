const toObject = <T>(url: string) =>
  url
    .replace("?", "")
    .split("&")
    .map((v) => v.split(/^([^=]+)=/).filter((v) => v))
    .reduce(
      (acc, [key, value]) => ({
        ...acc,
        [key]: decodeURIComponent(value),
      }),
      {} as T
    );

export default toObject;
