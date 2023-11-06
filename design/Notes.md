## About "completed" field in Review

I find this field to be misleading when considering the relationship between Reviews and Invitations. In particular i find that "completed" is not a Review related concept, since a Review exist when it is issued.

This field should conceptually be related to an Invitation entity instead, because it is the Invitation get's "completed" upon making a review and not the review itself.

Having a "completed" field on the Review confuses some properties of the Invitations with Reviews, breaking SRP and leading to cumbersome future implementations.

In v1 the "sender" of a review invitation is always the owner of the film, so the v1-schema of Review would suffice to any user invitation-related query (e.g: finding all the uncompleted reviews (actually the uncompleted invitations) along with the sender informations, finding all the uncompleted review for wich a user is invited, etc..). This would probably worse the overall performance of this queries though and lead to possible loss of historical context of invitations.

Moreover, what about making possible to request a review for non-owned films? this seems to be a pretty obvious feature in future versions, and this can't be realized with the v1 Review schema, because it misses the "sender" informations. Including "senderId" in the review would again mix "Invitation" related concept with "Reviews", leading to complex api definitions for review endpoints, performance issues on complex queries involving invitations, and so on. 

Instead, a more suitable approach would be to introduce "Invitation" as an entity containing all the informations needed: senderId, recipientId, filmId, completed/not-completed, and link Review with Invitation by an (optional*) "invitationId" field. In this way we also allow spontaneous reviews. Introducing this entity would make the Review.completed field redundant, enabling to further simplifies the schemas (remove if-then-else validations, if a review exist, it's fields do not depend on each other).

This will overall improve clarity, flexibility, scalability and maintainability.