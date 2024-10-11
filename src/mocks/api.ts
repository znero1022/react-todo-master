export const fetcher = async <T extends object>(url: string, options: RequestInit = {}): Promise<T> => {
  const res = await fetch(url, options);
  const data = await res.json();

  return data;
};

export const Api = <T extends object>(url: string) => ({
  async getOne(id: string) {
    return fetcher<{ message: string; code: number; data: T }>(`${url}/${id}`);
  },

  async getMany(page?: number) {
    return fetcher<{ message: string; code: number; data: T[] }>(`${url}?page=${page}`);
  },

  async create(data: Partial<T>) {
    return fetcher<{ message: string; code: number; data: T }>(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
  },

  async update(id: string, data: Partial<T>) {
    return fetcher<{ message: string; code: number; data: T }>(`${url}/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
  },

  async delete(id: string) {
    return fetcher<{ message: string; code: number }>(`${url}/${id}`, {
      method: "DELETE",
    });
  },
});
