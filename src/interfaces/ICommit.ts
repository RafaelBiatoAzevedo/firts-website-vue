import type { CommitOptions, Payload } from "vuex";

export interface ICommit {
  (type: string, payload?: any, options?: CommitOptions): void;
  <P extends Payload>(payloadWithType: P, options?: CommitOptions): void;
}
