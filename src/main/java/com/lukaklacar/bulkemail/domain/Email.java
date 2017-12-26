package com.lukaklacar.bulkemail.domain;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Field;
import org.springframework.data.mongodb.core.mapping.Document;

import java.io.Serializable;
import java.time.Instant;
import java.util.Objects;

import com.lukaklacar.bulkemail.domain.enumeration.Type;

/**
 * A Email.
 */
@Document(collection = "email")
public class Email implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    private String id;

    @Field("from")
    private String from;

    @Field("to")
    private String to;

    @Field("reply_to")
    private String replyTo;

    @Field("date_sent")
    private Instant dateSent;

    @Field("type")
    private Type type;

    @Field("subject")
    private String subject;

    // jhipster-needle-entity-add-field - JHipster will add fields here, do not remove
    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getFrom() {
        return from;
    }

    public Email from(String from) {
        this.from = from;
        return this;
    }

    public void setFrom(String from) {
        this.from = from;
    }

    public String getTo() {
        return to;
    }

    public Email to(String to) {
        this.to = to;
        return this;
    }

    public void setTo(String to) {
        this.to = to;
    }

    public String getReplyTo() {
        return replyTo;
    }

    public Email replyTo(String replyTo) {
        this.replyTo = replyTo;
        return this;
    }

    public void setReplyTo(String replyTo) {
        this.replyTo = replyTo;
    }

    public Instant getDateSent() {
        return dateSent;
    }

    public Email dateSent(Instant dateSent) {
        this.dateSent = dateSent;
        return this;
    }

    public void setDateSent(Instant dateSent) {
        this.dateSent = dateSent;
    }

    public Type getType() {
        return type;
    }

    public Email type(Type type) {
        this.type = type;
        return this;
    }

    public void setType(Type type) {
        this.type = type;
    }

    public String getSubject() {
        return subject;
    }

    public Email subject(String subject) {
        this.subject = subject;
        return this;
    }

    public void setSubject(String subject) {
        this.subject = subject;
    }
    // jhipster-needle-entity-add-getters-setters - JHipster will add getters and setters here, do not remove

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (o == null || getClass() != o.getClass()) {
            return false;
        }
        Email email = (Email) o;
        if (email.getId() == null || getId() == null) {
            return false;
        }
        return Objects.equals(getId(), email.getId());
    }

    @Override
    public int hashCode() {
        return Objects.hashCode(getId());
    }

    @Override
    public String toString() {
        return "Email{" +
            "id=" + getId() +
            ", from='" + getFrom() + "'" +
            ", to='" + getTo() + "'" +
            ", replyTo='" + getReplyTo() + "'" +
            ", dateSent='" + getDateSent() + "'" +
            ", type='" + getType() + "'" +
            ", subject='" + getSubject() + "'" +
            "}";
    }
}
