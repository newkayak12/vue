package com.vue_spring.dao.entity.user;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.vue_spring.dao.entity.base.BaseEntity;
import lombok.*;

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

@Entity
@Table(name = "USER")
public class User extends BaseEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "EMAIL", length = 50, nullable = false)
    private String email;

    @Column(name = "NICKNAME", length = 50, nullable = false)
    private String nickname;

    @Column(name = "PASSWORD", length = 250, nullable = false)
    private String password;

    @Column(name = "LAST_LOGGED_IN" )
    @Temporal(TemporalType.TIMESTAMP)
    private Date lastLoggedIn;

    //팔로워
    @ManyToOne
    @JsonIgnore
    @JoinColumn(name = "FOLLOWER_ID")
    private User userFollower = this;

    @OneToMany(mappedBy = "userFollower")
    private List<User> follower = new ArrayList<>();

//
//    //팔로잉
    @ManyToOne
    @JsonIgnore
    @JoinColumn(name = "FOLLOWING_ID")
    private User userFollowing = this;

    @OneToMany(mappedBy = "userFollowing")
    private List<User> following = new ArrayList<>();



//    public void addFollower(User user){
//        if(!userFollower.equals(user)){
//
//        }
//    }


}
