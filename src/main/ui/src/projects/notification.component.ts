No one answered, so answering my own question.

    Have a Spring Rest controller

SseController.java

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.mvc.method.annotation.SseEmitter;

import java.io.IOException;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

@RestController
public class SSEController {

    public static final List<SseEmitter> emitters = Collections.synchronizedList( new ArrayList<>());

    @RequestMapping(path = "/stream", method = RequestMethod.GET)
    public SseEmitter stream() throws IOException {

    SseEmitter emitter = new SseEmitter();

    emitters.add(emitter);
    emitter.onCompletion(() -> emitters.remove(emitter));

    return emitter;
}
}
ServiceClass.java

public void sendSseEventsToUI(Notification notification) { //your model class
    List<SseEmitter> sseEmitterListToRemove = new ArrayList<>();
    SSEController.emitters.forEach((SseEmitter emitter) -> {
        try {
            emitter.send(notification, MediaType.APPLICATION_JSON);
        } catch (IOException e) {
            emitter.complete();
            sseEmitterListToRemove.add(emitter);
            e.printStackTrace();
        }
    });
    SSEController.emitters.removeAll(sseEmitterListToRemove);
}
finally in Angular2 component do this

    notification.component.ts

import {Component, OnInit} from '@angular/core';

declare let EventSource:any;

@Component({
    selector: 'notification-cmp',
    templateUrl: 'notification.component.html'
})

export class NotificationComponent implements OnInit {
    connect(): void {
        let source = new EventSource('http://localhost:8080/stream');
        source.addEventListener('message', message => {
            let n: Notification; //need to have this Notification model class in angular2
            n = JSON.parse(message.data);
            console.log(message.data);
        });
    }

    ngOnInit(): void {
    }
}
