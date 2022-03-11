export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Date: any;
};

export type AddEventResult = {
  __typename?: 'AddEventResult';
  daysWithEvent: EventInDay;
  there: There;
};

export type AddPostResult = {
  __typename?: 'AddPostResult';
  there: There;
};

export type Event = {
  __typename?: 'Event';
  description?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  reservedAt: Scalars['Date'];
  title: Scalars['String'];
};

export type EventInDay = {
  __typename?: 'EventInDay';
  events: Array<Event>;
  id: Scalars['ID'];
};

export type Mutation = {
  __typename?: 'Mutation';
  addEvent?: Maybe<AddEventResult>;
  addPost: AddPostResult;
  updateEventDescription: Event;
};


export type MutationAddEventArgs = {
  description?: InputMaybe<Scalars['String']>;
  reservedAt: Scalars['Date'];
  title: Scalars['String'];
};


export type MutationAddPostArgs = {
  location: Scalars['String'];
  photos: Array<Scalars['String']>;
};


export type MutationUpdateEventDescriptionArgs = {
  description: Scalars['String'];
  id: Scalars['ID'];
};

export type Post = {
  __typename?: 'Post';
  createdAt: Scalars['Date'];
  id: Scalars['ID'];
  location: Scalars['String'];
  photos: Array<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  daysWithEvents: Array<EventInDay>;
  there: There;
};

export type Subscription = {
  __typename?: 'Subscription';
  eventAdded: Event;
  eventDescriptionUpdated: Event;
};


export type SubscriptionEventDescriptionUpdatedArgs = {
  id: Scalars['ID'];
};

export type There = {
  __typename?: 'There';
  coverImage?: Maybe<Scalars['String']>;
  dayCountFromMet: Scalars['Int'];
  id: Scalars['ID'];
  incomingEvents: Array<Event>;
  posts: Array<Post>;
};

export type User = {
  __typename?: 'User';
  id: Scalars['ID'];
  name: Scalars['String'];
  profileImage?: Maybe<Scalars['String']>;
};
