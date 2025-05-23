//TODO: figure out how to do profile pictures
export interface Messenger {
  display_name: string;
  username: string;
  bio: string;
  pronouns: string | null;
}

export class User implements Messenger {
  display_name: string;
  username: string;
  bio: string;
  pronouns: string | null;
  
  constructor(display_name: string, username: string, bio: string, pronouns?: string) {
    this.display_name = display_name;
    this.username = username;
    this.pronouns = pronouns ?? null;
    this.bio = bio;
  }
}