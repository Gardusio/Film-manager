## About "completed" field in Review

I find this field to be misleading when considering the relationship between Reviews and Invitations. In particular i find that "completed" is not a Review related concept, since a Review exist when it is issued.

This field should conceptually be related to an Invitation entity instead, because it is the Invitation get's "completed" upon making a review and not the review itself.

Having a "completed" field on the Review confuses some properties of the Invitations with Reviews, breaking SRP and leading to cumbersome future implementations.

In v1 the "sender" of a review invitation is always the owner of the film, so the v1-schema of Review would suffice to any user invitation-related query (e.g: finding all the uncompleted reviews (actually the uncompleted invitations) along with the sender informations, finding all the uncompleted review for wich a user is invited, etc..). This would probably worse the overall performance of this queries though and lead to possible loss of historical context of invitations.

Moreover, what about making possible to request a review for non-owned films? this seems to be a pretty obvious feature in future versions, and this can't be realized with the v1 Review schema, because it misses the "sender" informations. Including "senderId" in the review would again mix "Invitation" related concept with "Reviews", leading to complex api definitions for review endpoints, performance issues on complex queries involving invitations, and so on. 

Instead, a more suitable approach would be to introduce "Invitation" as an entity containing all the informations needed: senderId, recipientId, filmId, completed/not-completed, and link Review with Invitation by an (optional*) "invitationId" field. In this way we also allow spontaneous reviews. Introducing this entity would make the Review.completed field redundant, enabling to further simplifies the schemas (remove if-then-else validations, if a review exist, it's fields do not depend on each other).

This will overall improve clarity, flexibility, scalability and maintainability.



## About passing a "pagination" object down to the repository layer

I asked myself the following question: "Is it a good choise to pass down an entire pagination object that comes from the request itself down to the repository? isn't it better to "open" that object and pass down only necessary fields?"

I find the flexibility and extensibility that passing down the entire object is to be prefered, since in this version pagination is really simple and could be easily be extended in the feature. Potentially loosing a little bit of encapsulation seems good to me in this case.



## About types format and Ajv
I simply don't care about formats :), i know ajv plugins exists to also manage format validation but for the purpose of this i've decided to skip that. 



## About having /films/public and /films/private (or just /films)
I've some doubts on the design of this part of the films api. What is the purpose of having this separation?
Getting a film is possible if : the (logged-in) user is the owner, the film is public
why can't we just use /films/:{id} and perform the validation then? are you logged-in? are you the owner? is the film public? Why the client has to know, given a film id, wich route is the correct one to get the informations of that film?