// http Here are stored things related with our client, in this case a http client.
// dto All dto's that we receive from a repository.

export interface PostDTO {
  id: number;
  userId: number;
  title: string;
  body: string;
}
