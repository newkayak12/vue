package com.vue_spring.dao.entity.posts.iLiked;

import com.vue_spring.dao.entity.posts.post.Post;
import com.vue_spring.dao.entity.user.User;
import lombok.*;

import javax.persistence.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
@EqualsAndHashCode

@Table(name = "I_LIKED")
@Entity
public class ILiked {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @OneToOne
    @JoinColumn(name = "POST_ID")
    private Post post;

    @ManyToOne
    @JoinColumn(name = "USER_ID")
    private User user;

    @Column(name = "LIKED")
    private boolean liked;

}
