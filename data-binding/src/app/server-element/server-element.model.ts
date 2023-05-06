export class ServerElement {
  constructor(
    public type: 'server' | 'blueprint',
    public name: string,
    public content: string
  ) {}
}

export type EventData = { serverName: string; serverContent: string };
