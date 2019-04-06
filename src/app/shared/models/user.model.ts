export class User {
  name: string;
  firstName: string;
  id: string;
  groups: Array<SettingsGroup>;
  constructor(nameUser: string, firstNameUser: string, idUser: string) {
    this.name = nameUser;
    this.firstName = firstNameUser;
    this.id = idUser;
  }
}

export class SettingsGroup {
  idGroup: number;
  publicationFrequency: number;
  publicationFrequencyCustom: number;
  topicList: Array<string>;
}
