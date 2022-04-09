type Default = {
  semesterId: string;
};

export const useRoute = <T extends any>() => {
  return Object.fromEntries(new URLSearchParams(window.location.search)) as T &
    Default;
};
