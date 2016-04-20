courses = [{
    name: '危機'
    data: [{
        room: '藝204'
        time: [{
            day: 1
            period: [2, 3, 4]
        }]
    }]
}, {
    name: '品格'
    data: [{
        room: '藝512'
        time: [{
            day: 1
            period: [5, 6, 7]
        }]
    }]
}, {
    name: '英檢'
    data: [{
        room: '藝512'
        time: [{
            day: 2
            period: [2, 3, 4]
        }]
    }]
}, {
    name: '稅法'
    data: [{
        room: '藝506'
        time: [{
            day: 2
            period: [5, 6, 7]
        }]
    }]
}, {
    name: '中會'
    data: [{
        room: '承501'
        time: [{
            day: 3
            period: [2, 3]
        }, {
            day: 5
            period: [5 ,6]
        }]
    }, {
        room: '承403'
        time: [{
            day: 4
            period: [7, 8]
        }]
    }]
}, {
    name: '國文'
    data: [{
        room: '承403'
        time: [{
            day: 3
            period: [7, 8]
        }]
    }]
}, {
    name: '經濟'
    data: [{
        room: '藝508'
        time: [{
            day: 4
            period: [2, 3, 4]
        }]
    }]
}, {
    name: '英文'
    data: [{
        room: '視'
        time: [{
            day: 4
            period: [5, 6]
        }]
    }]
}, {
    name: '體育'
    data: [{
        time: [{
            day: 5
            period: [3, 4]
        }]
    }]
}, {
    name: '會軟'
    data: [{
        room: '藝509'
        time: [{
            day: 5
            period: [7, 8]
        }]
    }]
}]

timetable = []

for course in courses
    for data in course.data
        for time in data.time
            for period in time.period
                timetable[time.day] ?= []
                timetable[time.day][period] =
                    name: course.name
                    room: data.room

$table = $ '<table>'
$thead = $ '<thead>'
$tbody = $ '<tbody>'

$tr = $ '<tr>'
for day in ['', '一', '二', '三', '四', '五']
    $ '<th>'
        .append day
        .appendTo $tr

$tr.appendTo $thead

for period in [1..8]
    $tr = $ '<tr>'

    for day in [0..5]
        if 0 == day
            $ '<th>'
                .append period
                .appendTo $tr
        else
            $td = $ '<td>'
            $span = $ '<span>'

            $td
                .append timetable[day]?[period]?.name
                .appendTo $tr

            $span
                .append timetable[day]?[period]?.room
                .addClass 'class'
                .appendTo $td

    $tr.appendTo $tbody

$table
    .addClass 'table table-striped'
    .append $thead
    .append $tbody
    .appendTo '.timetable'