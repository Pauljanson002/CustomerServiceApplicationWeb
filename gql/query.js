import { gql } from "@apollo/client";

const IS_LOGGED_IN = gql`
    {
        isLoggedIn @client
    }
`;

const GET_ME = gql`
    query Query {
        me {
            id
            username
            email
            roles
        }
    }
`;

const GET_ME_AS_SERVICE_PROVIDER  = gql`
    query Query {
        me {
            username
            email
            nic
            profession
            province
            city
            town
            bio
            service_providing_status
            roles
        }
    }
`
const GET_ME_AS_SERVICE_REQUESTER  = gql`
    query Query {
        me {
            username
            email
            city
            address

        }
    }
`
const GET_NOTE_FEED = gql`
    query Query($jobPostingFeedProvince: String!, $jobPostingFeedCity: String!, $jobPostingFeedTown: String!, $jobPostingFeedCategory: String!, $jobPostingFeedCursor: String) {
        jobPostingFeed(province: $jobPostingFeedProvince, city: $jobPostingFeedCity, town: $jobPostingFeedTown, category: $jobPostingFeedCategory, cursor: $jobPostingFeedCursor) {
            jobPostings {
                id
                postedBy {
                    username
                }
                description
                budgetRange {
                    lowerLimit
                    upperLimit
                }
                location{
                    city
                    town
                }
            }
            cursor
            hasNextPage
        }
    }
`
export {IS_LOGGED_IN,GET_ME,GET_ME_AS_SERVICE_PROVIDER ,GET_NOTE_FEED,GET_ME_AS_SERVICE_REQUESTER}