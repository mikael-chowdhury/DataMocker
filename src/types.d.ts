export type Email = String & {};

export type Name = String & {};

export type PhoneNumber = String & {};

export interface IGenerator<T> {
  validate: (obj: T) => boolean;
  toType: (obj: any) => T;
  generate: () => Promise<T>;
}

export interface GenerationTemplate {
  [key: string]: () => Promise<any>;
}

export interface GenerationStructure {
  count: number;
  template?: GenerationTemplate;
}
