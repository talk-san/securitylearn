package com.talxan.ywitter.yuser;

import com.talxan.ywitter.post.Post;
import jakarta.persistence.*;
import lombok.*;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.Collection;
import java.util.List;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "yuser")
public class User implements UserDetails {

    @Id
    @GeneratedValue
    private Integer yuserId;

    private String firstName;
    private String lastName;
    private String email;
    private String password;
    private String photoUrl;

    @Column(name = "enabled")
    private Boolean enabled;

    @Column(name = "verification_token", length = 64)
    private String verificationToken;

    @OneToMany(mappedBy = "postYuser", fetch = FetchType.EAGER)
    private List<Post> posts;

    @ManyToMany(fetch = FetchType.EAGER)
    @JoinTable(name = "following",
            joinColumns = @JoinColumn(name = "yuser_id"),
            inverseJoinColumns = @JoinColumn(name = "following_id"))
    private List<User> following;

    @Enumerated
    private Role role;

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return role.getAuthorities();
    }

    @Override
    public String getPassword() {
        return password;
    }

    @Override
    public String getUsername() {
        return email;
    }

    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    public boolean isEnabled() {
        return this.getEnabled();
    }
}
