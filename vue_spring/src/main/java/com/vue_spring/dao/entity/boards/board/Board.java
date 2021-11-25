package com.vue_spring.dao.entity.boards.board;

import com.vue_spring.dao.entity.user.User;
import lombok.*;

import javax.persistence.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
@EqualsAndHashCode


@Table(name = "BOARD")
@Entity
public class Board {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "BOARD_ID")
    private Long id;

    @Column(name = "TITLE", length = 50)
    private String title;

    @OneToOne
    @JoinColumn(name = "USER")
    private User user;

    @Column(name = "CONTENT")
    private String content;





}
