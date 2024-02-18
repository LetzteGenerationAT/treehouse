import { ICalCalendar, ICalEventClass, ICalCalendarMethod } from 'ical-generator';

import type { PageLoad } from './$types';

export const load: PageLoad = async ({ data, url }) => {
  if (data.event.publishedAt && data.event.startsAt) {
    try {
      const calendar = new ICalCalendar({
        prodId: {
          company: 'baumhaus.community',
          product: 'treehouse',
          language: 'DE',
        },
        url: url.origin + url.pathname,
        method: ICalCalendarMethod.REQUEST,
      });
      calendar.createEvent({
        start: data.event.startsAt,
        end: data.event.endsAt,
        summary: data.event.title,
        description: data.event.description,
        location: data.event.location,
        class: data.event.public ? ICalEventClass.PUBLIC : ICalEventClass.CONFIDENTIAL,
        url: url.origin + url.pathname,
        created: data.event.createdAt,
        lastModified: data.event.modifiedAt,
        organizer: {
          name: data.event.organizer.name,
          email: data.event.organizer.name + '@roles.' + url.hostname,
        },
      });

      return {
        ...data,
        icsCalendarBlob: new Blob([calendar.toString()], {
          type: 'text/calendar',
        }),
      };
    } catch (error) {
      console.log(error);
    }
  }

  return data;
};
