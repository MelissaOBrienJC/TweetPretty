export interface ITweetPrettyDto {
  text: string;
  name: string;
  username: string;
  photourl: string;
  createddate: Date;
  referencedtweet: ITweetPrettyDto;
  tweetedphotourl: string;
}




