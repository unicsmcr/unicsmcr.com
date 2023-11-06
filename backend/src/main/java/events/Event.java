package events;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import java.time;
import java.utils;
import java.lang.String;

@Entity
public class Event {
  @Id
  private long id;

  private String title;
  private String description;
  private String image;
  private String location;
  private LocalDateTime date;
  private String type;
  private String link;
  private List<String> eventPhotos;
}
