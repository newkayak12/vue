package com.vue_spring.dao.entity.posts.post;

import com.vue_spring.dao.entity.posts.iLiked.ILiked;
import com.vue_spring.dao.entity.posts.postComment.PostComment;
import com.vue_spring.dao.entity.user.User;
import lombok.*;
import com.vue_spring.dao.entity.posts.postPhoto.PostPhoto;
import javax.persistence.*;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
@EqualsAndHashCode

@Table(name ="POST")
@Entity
public class Post {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "POST_ID")
    private Long postId;

    @Column(name = "TITLE")
    private String title;

    @OneToOne
    @JoinColumn(name = "USER_ID")
    private User user;

    @Column(name = "COnTENT")
    private String content;

    @OneToOne
    private Post parent = this;

    @OneToOne
    @JoinColumn(name = "RETWEET_ID")
    private Post retweet;


    @OneToMany(mappedBy = "post")
    private List<PostPhoto> photoList = new ArrayList<>();

    @OneToOne(mappedBy = "post")
    private ILiked iLiked;

    @Column(name = "WRITTEN_DATE")
    @Temporal(TemporalType.TIMESTAMP)
    private Date writtenDate;

    @OneToMany(mappedBy = "post")
    private List<PostComment> comment = new ArrayList<>();





}
