package com.vue_spring.dao.entity.posts.postPhoto;

import com.vue_spring.dao.entity.posts.post.Post;
import lombok.*;

import javax.persistence.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
@EqualsAndHashCode


@Table(name = "POST_PHOTO")
@Entity
public class PostPhoto {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "POST_ID")
    private Post post;


    @Column(name = "SRC", columnDefinition = "TEXT")
    private String src;
}
