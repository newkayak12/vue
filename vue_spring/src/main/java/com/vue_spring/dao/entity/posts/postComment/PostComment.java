package com.vue_spring.dao.entity.posts.postComment;

import com.vue_spring.dao.entity.posts.post.Post;
import com.vue_spring.dao.entity.user.User;
import lombok.*;

import javax.persistence.*;
import java.util.Date;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
@EqualsAndHashCode


@Table(name = "POST_COMMENT")
@Entity
public class PostComment {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "POST_COMMENT_ID")
    private Long postCommentId;

    @ManyToOne
    @JoinColumn(name = "POST_ID")
    private Post post;

    @ManyToOne
    @JoinColumn(name = "USER_ID")
    private User user;

    @Column(name = "CONTENT", columnDefinition = "TEXT")
    private String content;

    @Column(name = "WRITTENT_DATE")
    @Temporal(TemporalType.TIMESTAMP)
    private Date writtenDate;

}
