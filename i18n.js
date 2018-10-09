I18n.translations || (I18n.translations = {}),
I18n.translations.ko = I18n.extend(I18n.translations.ko || {}, {
    activerecord: {
        attributes: {
            ability: null,
            account: {
                name: "\uc774\ub984",
                time_zone: "\uc2dc\uac04\ub300"
            },
            app: {
                api_key: "API key",
                few: "apps",
                name: "\uc571 \uc774\ub984",
                one: "app",
                os_platform: "\uac1c\ubc1c \ud50c\ub7ab\ud3fc",
                other: "apps",
                package_name: "\ud328\ud0a4\uc9c0 \uc774\ub984",
                zero: "apps"
            },
            app_view: {
                app_version_name: "\uc571 \ubc84\uc804 \uc774\ub984"
            },
            app_view_analysis: {
                analysis_date: "\ubd84\uc11d \ub0a0\uc9dc",
                coordinate_click_count: "\uc88c\ud45c \ub2f9 \ud074\ub9ad",
                duration: "\uba38\ubb38 \uc2dc\uac04",
                interaction_count: "\uc561\uc158 \ud69f\uc218",
                next_view_count: "\uc720\ucd9c \uacbd\ub85c",
                object_click_count: "\ud074\ub9ad \ud69f\uc218",
                previous_view_count: "\uc720\uc785 \uacbd\ub85c",
                session_count: "\uc138\uc158",
                unresponsive_coordinate_count: "\ubc18\uc751 \uc5c6\ub294 \ud074\ub9ad",
                visit_count: "\ubc29\ubb38 \ud69f\uc218"
            },
            base_app: {
                few: "apps",
                name: "\uc571 \uc774\ub984",
                one: "app",
                os_platform: "\uac1c\ubc1c \ud50c\ub7ab\ud3fc",
                other: "apps",
                package_name: "\ud328\ud0a4\uc9c0 \uc774\ub984",
                zero: "apps"
            },
            campaign: {
                api_key: "API key",
                description: "\uc124\uba85",
                permission: "\ud5c8\uac00",
                revision: "\uac1c\uc815",
                status: "\uc0c1\ud0dc",
                version: "\uc124\ubb38\uc870\uc0ac \uc774\ub984"
            },
            checkpoint: {
                attr: "\uc124\uc815\uac12",
                description: "\uc0c1\ud669 \uc124\uba85",
                name: "\uc2dd\ubcc4 \ucf54\ub4dc",
                title: "\uccb4\ud06c\ud3ec\uc778\ud2b8 \uc774\ub984"
            },
            checkpoint_pass: {
                count: "\ud69f\uc218"
            },
            checkpoint_pass_count_reference: {
                attr: "\uac12"
            },
            checkpoint_pass_log: {
                device_time: "\uae30\uae30 \uc2dc\uac04",
                device_timezone: "\uae30\uae30 \uc2dc\uac04\ub300",
                seq_num: "\uc21c\uc11c \ubc88\ud638"
            },
            checkpoint_relation: null,
            checkpoint_type: null,
            crash: {
                package_name: "\ud328\ud0a4\uc9c0 \uc774\ub984",
                stacktrace: "Stacktrace"
            },
            device_model: {
                alias: "\ubcc4\uba85",
                brand: "\ud68c\uc0ac",
                device: "\uae30\uae30",
                height: "\uc138\ub85c \ud574\uc0c1\ub3c4",
                name: "\ubaa8\ub378\uba85",
                width: "\uac00\ub85c \ud574\uc0c1\ub3c4"
            },
            event: null,
            head_app_view: {
                alias: "\uc774\ub984",
                orientation: "\ud654\uba74 \ubc29\ud5a5",
                unique_name: "\uc2dd\ubcc4 \ucf54\ub4dc"
            },
            role: null,
            scenario: {
                name: "\uc774\ub984"
            },
            scenario_path: null,
            scenario_progress: {
                is_end: "\uc644\ub8cc \uc5ec\ubd80"
            },
            survey: {
                description: "\ubb38\ud56d \ub0b4\uc6a9",
                short_name: "\uc2dd\ubcc4 \ucf54\ub4dc",
                survey_order: "\uc21c\uc11c",
                title: "\ubb38\ud56d \uc81c\ubaa9"
            },
            survey_choice: {
                content: "\ub0b4\uc6a9"
            },
            survey_daily_counter: {
                date: "\ub0a0\uc9dc",
                exposed_count: "\ub178\ucd9c \ud69f\uc218",
                responsed_count: "\uc751\ub2f5 \ud69f\uc218"
            },
            survey_exposure: {
                device_time: "\uae30\uae30 \uc2dc\uac04",
                device_timezone: "\uae30\uae30 \uc2dc\uac04\ub300",
                seq_num: "\uc21c\uc11c \ubc88\ud638"
            },
            survey_result: {
                content: "\ub0b4\uc6a9",
                device_time: "\uae30\uae30 \uc2dc\uac04",
                device_timezone: "\uae30\uae30 \uc2dc\uac04\ub300",
                seq_num: "\uc21c\uc11c \ubc88\ud638"
            },
            survey_type: {
                objective: "\uac1d\uad00\uc2dd"
            },
            tester: null,
            tester_activity: null,
            tester_device: {
                locale: "\uc9c0\uc5ed",
                model: "\ubaa8\ub378\uba85",
                os_platform: "\ud50c\ub7ab\ud3fc",
                os_version: "\uc6b4\uc601\uccb4\uc81c \ubc84\uc804",
                unique_id: "\uc2dd\ubcc4 \ucf54\ub4dc"
            },
            tester_meta_data: null,
            tester_meta_data_type: null,
            tester_session: {
                app_version_code: "\ubc84\uc804 \ucf54\ub4dc",
                app_version_name: "\ubc84\uc804",
                deletion_time: "\uc0ad\uc81c \uc2dc\uac04",
                end_at: "\ub9cc\ub8cc \uc2dc\uac04",
                is_analyzed: "\ubd84\uc11d \uc644\ub8cc \uc5ec\ubd80",
                local_time: "\uc2dc\uac04",
                local_time_TZ: "\uc2dc\uac04\ub300",
                remote_ip: "IP \uc8fc\uc18c"
            },
            user: {
                current_password: "\ud604\uc7ac \ube44\ubc00\ubc88\ud638",
                email: "\uc774\uba54\uc77c",
                few: "users",
                job: "\uc9c1\ubb34",
                name: "\ud68c\uc0ac\uba85 (\uc774\ub984)",
                new_password: "\uc0c8 \ube44\ubc00\ubc88\ud638",
                one: "user",
                other: "users",
                password: "\ube44\ubc00\ubc88\ud638",
                password_confirmation: "\ube44\ubc00\ubc88\ud638 \uc7ac\uc785\ub825",
                zero: "users"
            },
            version: {
                code: "\ubc84\uc804 \ucf54\ub4dc",
                name: "\ubc84\uc804"
            }
        },
        models: {
            ability: "\uad8c\ud55c",
            account: "\uacc4\uc815",
            app: "\uc571",
            app_view: "\uc571 \ud654\uba74",
            app_view_analysis: "\uc571 \ud654\uba74 \ubd84\uc11d",
            base_app: "\uc571",
            campaign: "\uc124\ubb38\uc870\uc0ac",
            checkpoint: "\uccb4\ud06c\ud3ec\uc778\ud2b8",
            checkpoint_pass: "\uccb4\ud06c\ud3ec\uc778\ud2b8 \ud1b5\uacfc",
            checkpoint_pass_count_reference: "\uccb4\ud06c\ud3ec\uc778\ud2b8 \ud1b5\uacfc \ud69f\uc218 \ucc38\uc870",
            checkpoint_pass_log: "\uccb4\ud06c\ud3ec\uc778\ud2b8 \ud1b5\uacfc \uae30\ub85d",
            checkpoint_relation: "\uccb4\ud06c\ud3ec\uc778\ud2b8 \ubb36\uc74c",
            checkpoint_type: "\uccb4\ud06c\ud3ec\uc778\ud2b8 \uc720\ud615",
            crash: "\ud06c\ub798\uc2dc",
            device_model: "\uae30\uae30",
            event: "\uc774\ubca4\ud2b8",
            head_app_view: "\ub300\ud45c \ud654\uba74",
            role: "\uc5ed\ud560",
            scenario: "\uc2dc\ub098\ub9ac\uc624",
            scenario_path: "\uc2dc\ub098\ub9ac\uc624 \uacbd\ub85c",
            scenario_progress: "\uc2dc\ub098\ub9ac\uc624 \uc9c4\ud589",
            survey: "\uc124\ubb38",
            survey_choice: "\uc124\ubb38 \uc120\ud0dd\uc9c0",
            survey_daily_counter: "\uc77c\uc77c \uc124\ubb38 \uce74\uc6b4\ud130",
            survey_exposure: "\uc124\ubb38 \ub178\ucd9c",
            survey_result: "\uc124\ubb38 \uacb0\uacfc",
            survey_type: "\uc124\ubb38 \uc720\ud615",
            tester: "\ud14c\uc2a4\ud130",
            tester_activity: "\ud14c\uc2a4\ud130 \ud65c\ub3d9",
            tester_device: "\ud14c\uc2a4\ud2b8 \uae30\uae30",
            tester_meta_data: "\ud14c\uc2a4\ud130 \uba54\ud0c0 \ub370\uc774\ud130",
            tester_meta_data_type: "\ud14c\uc2a4\ud130 \uba54\ud0c0 \ub370\uc774\ud130 \uc720\ud615",
            tester_session: "\uc138\uc158",
            user: "\uc0ac\uc6a9\uc790 \uacc4\uc815",
            version: "\ubc84\uc804"
        }
    },
    admin_alert: {
        admin_page: "\uad00\ub9ac\uc790 \ud398\uc774\uc9c0",
        list: "\uc571 \ubaa9\ub85d",
        notice: "\uacf5\uc9c0\uc0ac\ud56d \uad00\ub9ac",
        title: "\uad00\ub9ac\uc790 \uad8c\ud55c\uc73c\ub85c \uc811\uc18d\uc911\uc785\ub2c8\ub2e4. \ubcf4\uc548\uc5d0 \uc2e0\uacbd \uc368 \uc8fc\uc138\uc694."
    },
    alert: {
        add_favorite: "\uc990\uaca8\ucc3e\uae30\uac00 \ucd94\uac00\ub418\uc5c8\uc2b5\ub2c8\ub2e4.",
        before_screen_data_html: "\uc571 \ubc84\uc804 \ud544\ud130\uc5d0\uc11c <b>\uc804\uccb4 \ubc84\uc804</b> \uc120\ud0dd\uc2dc, \ud654\uba74 \uc8fc\uc694 \uc9c0\ud45c\uc5d0\uc11c <b>\ub3d9\uc77c\ud55c \uae30\uac04 \ub300\ube44 \uc99d\uac10\uc728</b>\uc774 \ud45c\uc2dc\ub429\ub2c8\ub2e4.",
        date_alert_html: "<b>\uc8fc(Week) \uc2dc\uc791\uc77c \uae30\uc900</b>\uc774 \ub2e4\ub978 \uc8fc\uac04\uc785\ub2c8\ub2e4.<br/>\uc2e4\uc81c \uc801\uc6a9\ub41c \uae30\uac04: %{start} ~ %{end}",
        date_limit_content_html: "<b>%{name}\uc758 \ud504\ub85c\ubaa8\uc158\uc774 \ub9cc\ub8cc\ub418\uc5c8\uc2b5\ub2c8\ub2e4!</b><br/><br/>\uacc4\uc18d \ubd84\uc11d\uc744 \uc9c4\ud589\ud558\uc2dc\ub824\uba74 \ud50c\ub79c\uc744 \uc5c5\uadf8\ub808\uc774\ub4dc \ud574\uc8fc\uc138\uc694.<br/>\ubb38\uc758\ub294 help@userhabit.io\ub85c \ubd80\ud0c1\ub4dc\ub9bd\ub2c8\ub2e4.",
        date_limit_title: "\ud50c\ub79c \uae30\ud55c \ub9cc\ub8cc \uc548\ub0b4",
        dev_alert_html: "1. \uc2e4\uc81c \uc0ac\uc6a9\uc790\ub4e4\uc5d0\uac8c \uc571\uc744 \ubc30\ud3ec\ud558\uae30 \uc804\uc5d0 <b>\ub370\uc774\ud130\uc5d0 \ubb38\uc81c\uac00 \uc5c6\ub294\uc9c0 \ud14c\uc2a4\ud2b8</b> \ud558\uc138\uc694.<br/>2. \ubd84\uc11d\uc5d0 \ud544\uc694\ud55c <b>\uc2a4\ud06c\ub9b0\uc0f7\uc744 \uc218\uc9d1</b>\ud558\uc138\uc694. \uc2a4\ud06c\ub9b0\uc0f7 \uc218\uc9d1\uc740 Test \ubaa8\ub4dc\uc5d0\uc11c\ub9cc \uac00\ub2a5\ud569\ub2c8\ub2e4.",
        dev_notice_1: "Test \ubaa8\ub4dc\uc5d0\uc11c\ub294 \uc62c\ubc14\ub978 \uc720\uc800\ud574\ube57 \uc801\uc6a9\uc744 \ub3d5\uae30 \uc704\ud574 \ub370\uc774\ud130\ub97c \ubaa8\ub2c8\ud130\ub9c1 \ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.",
        dev_notice_2: "Test \ubaa8\ub4dc\uc758 \ub370\uc774\ud130\ub294 \uc77c\uc815 \uae30\uac04\uc774 \uc9c0\ub098\uba74 \uc0ac\ub77c\uc9d1\ub2c8\ub2e4.",
        fail: "\uc804\uc1a1\uc774 \uc2e4\ud328\ud588\uc2b5\ub2c8\ub2e4.",
        free_dev_over_sv_content_html: "<b>\uc2a4\ud06c\ub9b0\ubdf0 \uc0ac\uc6a9\ub7c9\uc744 \ubaa8\ub450 \uc18c\uc9c4\ud588\uc2b5\ub2c8\ub2e4!</b><br/><br/>\ud14c\uc2a4\ud2b8 \uc0ac\uc6a9\ub7c9\uc740 \uc6d45,000 \uc2a4\ud06c\ub9b0\ubdf0\uae4c\uc9c0 \uc81c\uacf5\ub429\ub2c8\ub2e4.<br/>\ud14c\uc2a4\ud2b8\ub97c \ub9c8\ucce4\ub2e4\uba74 <b>\uc81c\ud488 SDK\ub97c \ud0d1\uc7ac</b>\ud574 \uc2e4\uc81c \uc571 \uc0ac\uc6a9\uc790\uc758 \ub370\uc774\ud130 \ubd84\uc11d\uc744 \uc2dc\uc791\ud558\uc138\uc694.<br/><br/>\ud14c\uc2a4\ud2b8 \uc0ac\uc6a9\ub7c9 \ucd94\uac00 \uc694\uccad\uc740 help@userhabit.io\ub85c \ubb38\uc758\ud574\uc8fc\uc138\uc694.",
        free_dev_over_sv_title: "\uac1c\ubc1c\uc790\ubaa8\ub4dc \uc0ac\uc6a9\ub7c9 \uc18c\uc9c4 \uc548\ub0b4",
        free_prd_over_sv_content_html: "<b>%{name}</b>\uc758 \ud50c\ub79c \uc0ac\uc6a9\ub7c9\uc744 \ucd08\uacfc\ud588\uc2b5\ub2c8\ub2e4!<br/><br/>\uacc4\uc18d \ubd84\uc11d\uc744 \uc9c4\ud589\ud558\uc2dc\ub824\uba74 \ud50c\ub79c\uc744 \uc5c5\uadf8\ub808\uc774\ub4dc \ud574\uc8fc\uc138\uc694.<br/>\ubb38\uc758\ub294 help@userhabit.io\ub85c \ubd80\ud0c1\ub4dc\ub9bd\ub2c8\ub2e4.",
        free_prd_over_sv_title: "\ub370\uc774\ud130 \uc870\ud68c \uc81c\ud55c \uc548\ub0b4",
        invalid_email: "\uc720\ud6a8\ud558\uc9c0\uc54a\uc740 \uc774\uba54\uc77c \uc8fc\uc18c \uc785\ub2c8\ub2e4.",
        list_over: "\ub9ac\uc2a4\ud2b8\ub97c 10,000\uac1c \uc774\uc0c1 \ud655\uc778\ud558\uc2dc\ub824\uba74 \ubcc4\ub3c4\ub85c \uc694\uccad\ud574\uc8fc\uc138\uc694.",
        multiple_select_alert: "\ub370\uc774\ud130\uac00 \ub9ce\uc544 \ucd5c\ub300 5\uac1c\uae4c\uc9c0 \uc120\ud0dd\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.",
        multiple_select_info: "\ucd5c\ub300 5\uac1c \uc120\ud0dd\uac00\ub2a5",
        no_fav_list: "\ucd94\uac00\ub41c \uc990\uaca8\ucc3e\uae30 \ubaa9\ub85d\uc774 \uc5c6\uc2b5\ub2c8\ub2e4. \uc2dc\uc791/\ubaa9\ud45c\ud654\uba74\uc744 \uc120\ud0dd \ud6c4, \uc990\uaca8\ucc3e\uae30\ub97c \ucd94\uac00\ud574 \uc8fc\uc138\uc694.",
        no_filter_result: "\ud574\ub2f9\ud558\ub294 \ub370\uc774\ud130\uac00 \uc5c6\uc2b5\ub2c8\ub2e4. \ud544\ud130\ub97c \ub2e4\uc2dc \uc870\uc815\ud574\uc8fc\uc138\uc694.",
        no_have_screen: "\uc120\ud0dd\ud55c \ubc84\uc804\uc5d0\ub294 \ud574\ub2f9 \ud654\uba74\uc774 \uc874\uc7ac\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4.",
        no_screen_analysis: "SDK \uc0bd\uc785 \ud6c4 \ub2e4\uc74c\ub0a0 \ub370\uc774\ud130\uac00 \ub098\uc624\uae30 \uc804\uae4c\uc9c0 'SDK \uc0bd\uc785\ud558\uace0 1\uc77c\uc774 \uc9c0\ub09c \ud6c4\uc5d0 \ub370\uc774\ud130\ub97c \ud655\uc778\ud558\uc2e4 \uc218 \uc788\uc2b5\ub2c8\ub2e4.'",
        no_search_result: "\uac80\uc0c9\ub41c \ud654\uba74\uc774 \uc5c6\uc2b5\ub2c8\ub2e4.",
        no_session: "\ud574\ub2f9\ud558\ub294 \ub370\uc774\ud130\uac00 \uc5c6\uc2b5\ub2c8\ub2e4. \uc0c1\ub2e8\uc758 \uc0ac\uc6a9\uc790, \uad6d\uac00, \ubc84\uc804, \ub0a0\uc9dc \ud544\ud130\ub97c \uc870\uc815\ud574\uc8fc\uc138\uc694.",
        no_usage_flow: "SDK \uc0bd\uc785\ud6c4 \uadf8 \ub2e4\uc74c\uc8fc \uc77c\uc694\uc77c\uc5d0 \ub370\uc774\ud130\uac00 \ub098\uc624\uae30 \uc804\uae4c\uc9c0 'SDK \uc0bd\uc785\ud558\uace0 1\uc8fc\uc77c\uc774 \uc9c0\ub09c \ud6c4\uc5d0 \ub370\uc774\ud130\ub97c \ud655\uc778\ud558\uc2e4 \uc218 \uc788\uc2b5\ub2c8\ub2e4.'",
        object_name_change: "\uc624\ube0c\uc81d\ud2b8 \uc774\ub984\uc774 \uc785\ub825\ub418\uc9c0 \uc54a\uc558\uc2b5\ub2c8\ub2e4.",
        over_app_limit: "\uc0dd\uc131 \uac00\ub2a5\ud55c \uc571 \uc218\ub97c \ucd08\uacfc\ud588\uc2b5\ub2c8\ub2e4.",
        overdue_content_html: "<b>\ud50c\ub79c \uacfc\uae08\uc774 \uc5f0\uccb4\uc911\uc785\ub2c8\ub2e4!</b><br/><br/>\uacc4\uc18d \ubd84\uc11d\ud558\uc2dc\ub824\uba74 \uacb0\uc81c\ub97c \uc9c4\ud589\ud574\uc8fc\uc138\uc694.<br/>\uc790\uc138\ud55c \ub0b4\uc6a9\uc740 <a href=${url}>\uacb0\uc81c\uc815\ubcf4</a> \ud398\uc774\uc9c0\ub97c \ucc38\uace0\ud558\uc2dc\uace0<br/>\uad81\uae08\ud55c \uc810\uc740 help@userhabit.io\ub85c \ubb38\uc758\ud574\uc8fc\uc138\uc694.",
        overdue_title: "\uacfc\uae08 \uc5f0\uccb4 \uc548\ub0b4",
        remove_favorite: "\uc990\uaca8\ucc3e\uae30\uac00 \ud574\uc81c\ub418\uc5c8\uc2b5\ub2c8\ub2e4.",
        screen_alias_change: "\ud654\uba74 \uc774\ub984\uc774 \uc785\ub825\ub418\uc9c0 \uc54a\uc558\uc2b5\ub2c8\ub2e4.",
        select_trend_graph_over: "2\uac1c \uc9c0\ud45c\ub9cc \ube44\uad50\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. 2\uac1c\uc758 \uc9c0\ud45c\ub97c \uc120\ud0dd\ud574\uc8fc\uc138\uc694.",
        send_email: "\uba54\uc77c\uc774 \ubc1c\uc1a1\ub418\uc5c8\uc2b5\ub2c8\ub2e4.",
        send_invite_email: "\ucd08\ub300 \uba54\uc77c\uc774 \ubc1c\uc1a1\ub418\uc5c8\uc2b5\ub2c8\ub2e4.",
        trend_html: "<b>\ud604\uc7ac \ud654\uba74</b>\uc758 \uc8fc\uac04 \uc21c\uc704 \ubc0f <b>\ud2b8\ub798\ud53d</b> \ucd94\uc774\ub97c \ud655\uc778\ud574 \ubcf4\uc138\uc694.<br/><b>\uae30\uac04\ub0b4</b> \uc21c\uc704 \ub370\uc774\ud130\uac00 \uc5c6\ub294 \uacbd\uc6b0, \ucd5c\ud558\uc704 \uc21c\uc704\ub85c \ud45c\uc2dc\ub418\uba70 \ucd5c\ub300 200\uc704\uae4c\uc9c0 \uc9d1\uacc4\ub429\ub2c8\ub2e4."
    },
    change_screenshot_modal: {
        load_screen_html: '<span class="modify-screen-name"></span> \ud654\uba74 \ubd88\ub7ec\uc624\uae30',
        no_screenshot_html: "\ucde8\ub4dd\ud55c \uc2a4\ud06c\ub9b0\uc0f7\uc774 \uc5c6\uc2b5\ub2c8\ub2e4. \uc2a4\ud06c\ub9b0\uc0f7\uc740 <a href='%{url}' target='blank'>Test \ubaa8\ub4dc</a>\uc5d0\uc11c \uc218\uc9d1\ud558\uc2e4 \uc218 \uc788\uc2b5\ub2c8\ub2e4.",
        title_html: "Test \ubaa8\ub4dc\uc5d0\uc11c \uc218\uc9d1\ub41c \uc2a4\ud06c\ub9b0\uc0f7\uc744 \ubaa8\ub450 \ubd88\ub7ec\uc635\ub2c8\ub2e4. \ub300\ud45c\ud654\uba74\uc73c\ub85c \uc124\uc815\ud558\uace0\uc790 \ud558\ub294 \ud654\uba74\uc744 \uc120\ud0dd\ud574\uc8fc\uc138\uc694."
    },
    commands: {
        add: "%{model} \ucd94\uac00",
        copy_to_clipboard: "\ud074\ub9bd\ubcf4\ub4dc\uc5d0 \ubcf5\uc0ac\ud558\uae30",
        create: "\uc0c8 %{model} \ub9cc\ub4e4\uae30",
        index: "%{model} \ubaa9\ub85d",
        name: "%{model} \uc774\ub984",
        "new": "\uc0c8 %{model}",
        select: "%{model} \uc120\ud0dd"
    },
    contact: {
        address: "\uc11c\uc6b8\ud2b9\ubcc4\uc2dc \uc911\uad6c \uc744\uc9c0\ub85c 66 KEB\ud558\ub098\uc740\ud589 13\uce35, \uc720\uc800\ud574\ube57",
        tel: "070-8230-3390"
    },
    core: {
        all_flows: "\uc804\uccb4 \uc0ac\uc6a9\ud750\ub984",
        all_screens: "\uc804\uccb4\ud654\uba74",
        app_delete: "\uc571 \uc0ad\uc81c",
        app_setting: "\uc571 \uc124\uc815",
        apps: "\ub300\uc2dc\ubcf4\ub4dc",
        crash_analytics: "\ud06c\ub798\uc2dc \ubd84\uc11d",
        each_flows: "\uac1c\ubcc4 \uacbd\ub85c\ubd84\uc11d",
        each_screen_page: "\uc0c1\uc138\ud654\uba74",
        flow_analysis: "\uac1c\ubcc4 \uacbd\ub85c\ubd84\uc11d",
        funnel_analyses: "\ud654\uba74\ubcc4 \ud1b5\uacfc\uc728",
        heatmaps: "\ud788\ud2b8\ub9f5",
        rate_of_changes: "\uc99d\uac10\ub960 \ubd84\uc11d",
        screen_analysis: "\ud654\uba74\ubd84\uc11d",
        screen_rankings: "\ud654\uba74\ub7ad\ud0b9",
        screenshot_setting: "\uc2a4\ud06c\ub9b0\uc0f7 \uad00\ub9ac",
        sdk_download: "SDK \ub2e4\uc6b4\ub85c\ub4dc",
        session_replays: "\ub9ac\ud50c\ub808\uc774",
        share_link: "\uacf5\uc720 URL \ubcf5\uc0ac",
        target_flows: "\ubaa9\ud45c \uc0ac\uc6a9\ud750\ub984"
    },
    countries: {
        AC: "\uc5b4\uc13c\uc158 \uc12c",
        AD: "\uc548\ub3c4\ub77c",
        AE: "\uc544\ub78d\uc5d0\ubbf8\ub9ac\ud2b8 \uc5f0\ud569",
        AF: "\uc544\ud504\uac00\ub2c8\uc2a4\ud0c4",
        AG: "\uc564\ud2f0\uac00 \ubc14\ubd80\ub2e4",
        AI: "\uc548\uae38\ub77c",
        AL: "\uc54c\ubc14\ub2c8\uc544",
        AM: "\uc544\ub974\uba54\ub2c8\uc544",
        AN: "\ub124\ub35c\ub780\ub4dc\ub839 \uc548\ud2f8\ub808\uc2a4",
        AO: "\uc559\uace8\ub77c",
        AQ: "\ub0a8\uadf9 \ub300\ub959",
        AR: "\uc544\ub974\ud5e8\ud2f0\ub098",
        AS: "\uc544\uba54\ub9ac\uce78 \uc0ac\ubaa8\uc544",
        AT: "\uc624\uc2a4\ud2b8\ub9ac\uc544",
        AU: "\ud638\uc8fc",
        AW: "\uc544\ub8e8\ubc14",
        AX: "\uc62c\ub780\ub4dc \uc81c\ub3c4",
        AZ: "\uc544\uc81c\ub974\ubc14\uc774\uc794",
        BA: "\ubcf4\uc2a4\ub2c8\uc544 \ud5e4\ub974\uccb4\uace0\ube44\ub098",
        BB: "\ubc14\ubca0\uc774\ub3c4\uc2a4",
        BD: "\ubc29\uae00\ub77c\ub370\uc2dc",
        BE: "\ubca8\uae30\uc5d0",
        BF: "\ubd80\ub974\ud0a4\ub098\ud30c\uc18c",
        BG: "\ubd88\uac00\ub9ac\uc544",
        BH: "\ubc14\ub808\uc778",
        BI: "\ubd80\ub8ec\ub514",
        BJ: "\ubca0\ub0c9",
        BL: "\uc0dd \ubc14\ub974\ud154\ub974\ubbf8",
        BM: "\ubc84\ubba4\ub2e4",
        BN: "\ube0c\ub8e8\ub098\uc774",
        BO: "\ubcfc\ub9ac\ube44\uc544",
        BQ: "\ub124\ub35c\ub780\ub4dc\ub839 \uce74\ub9ac\ube0c",
        BR: "\ube0c\ub77c\uc9c8",
        BS: "\ubc14\ud558\ub9c8",
        BT: "\ubd80\ud0c4",
        BV: "\ubd80\ubca0",
        BW: "\ubcf4\uce20\uc640\ub098",
        BY: "\ubca8\ub77c\ub8e8\uc2a4",
        BZ: "\ubca8\ub9ac\uc988",
        CA: "\uce90\ub098\ub2e4",
        CC: "\ucf54\ucf54\uc2a4\uc81c\ub3c4",
        CD: "\ucf69\uace0-\ud0a8\uc0e4\uc0ac",
        CF: "\uc911\uc559 \uc544\ud504\ub9ac\uce74 \uacf5\ud654\uad6d",
        CG: "\ucf69\uace0",
        CH: "\uc2a4\uc704\uc2a4",
        CI: "\ucf54\ud2b8\ub514\ubd80\uc544\ub974",
        CK: "\ucfe1\uc81c\ub3c4",
        CL: "\uce60\ub808",
        CM: "\uce74\uba54\ub8ec",
        CN: "\uc911\uad6d",
        CO: "\ucf5c\ub86c\ube44\uc544",
        CP: "\ud074\ub9bd\ud37c\ud2bc \uc12c",
        CR: "\ucf54\uc2a4\ud0c0\ub9ac\uce74",
        CU: "\ucfe0\ubc14",
        CV: "\uae4c\ubf40\ubca0\ub974\ub370",
        CW: "\ud034\ub77c\uc18c",
        CX: "\ud06c\ub9ac\uc2a4\ub9c8\uc2a4\uc12c",
        CY: "\uc0ac\uc774\ud504\ub7ec\uc2a4",
        CZ: "\uccb4\ucf54",
        DE: "\ub3c5\uc77c",
        DG: "\ub514\uc5d0\uace0 \uac00\ub974\uc2dc\uc544",
        DJ: "\uc9c0\ubd80\ud2f0",
        DK: "\ub374\ub9c8\ud06c",
        DM: "\ub3c4\ubbf8\ub2c8\uce74",
        DO: "\ub3c4\ubbf8\ub2c8\uce74 \uacf5\ud654\uad6d",
        DZ: "\uc54c\uc81c\ub9ac",
        EA: "\uc138\uc6b0\ud0c0 \ubc0f \uba5c\ub9ac\uc57c",
        EC: "\uc5d0\ucf70\ub3c4\ub974",
        EE: "\uc5d0\uc2a4\ud1a0\ub2c8\uc544",
        EG: "\uc774\uc9d1\ud2b8",
        EH: "\uc11c\uc0ac\ud558\ub77c",
        ER: "\uc5d0\ub9ac\ud2b8\ub9ac\uc544",
        ES: "\uc2a4\ud398\uc778",
        ET: "\uc774\ub514\uc624\ud53c\uc544",
        EU: "\uc720\ub7fd \uc5f0\ud569",
        FI: "\ud540\ub780\ub4dc",
        FJ: "\ud53c\uc9c0",
        FK: "\ud3ec\ud074\ub79c\ub4dc \uc81c\ub3c4",
        FM: "\ubbf8\ud06c\ub85c\ub124\uc2dc\uc544",
        FO: "\ud398\ub85c\uc81c\ub3c4",
        FR: "\ud504\ub791\uc2a4",
        GA: "\uac00\ubd09",
        GB: "\uc601\uad6d",
        GD: "\uadf8\ub808\ub098\ub2e4",
        GE: "\uc870\uc9c0\uc544",
        GF: "\ud504\ub791\uc2a4\ub839 \uae30\uc544\ub098",
        GG: "\uac74\uc9c0",
        GH: "\uac00\ub098",
        GI: "\uc9c0\ube0c\ub864\ud130",
        GL: "\uadf8\ub9b0\ub780\ub4dc",
        GM: "\uac10\ube44\uc544",
        GN: "\uae30\ub2c8",
        GP: "\uacfc\ub4e4\ub8e8\ud504",
        GQ: "\uc801\ub3c4 \uae30\ub2c8",
        GR: "\uadf8\ub9ac\uc2a4",
        GS: "\uc0ac\uc6b0\uc2a4\uc870\uc9c0\uc544 \uc0ac\uc6b0\uc2a4\uc0cc\ub4dc\uc704\uce58 \uc81c\ub3c4",
        GT: "\uacfc\ud14c\ub9d0\ub77c",
        GU: "\uad0c",
        GW: "\uae30\ub124\ube44\uc3d8",
        GY: "\uac00\uc774\uc544\ub098",
        HK: "\ud64d\ucf69, \uc911\uad6d \ud2b9\ubcc4\ud589\uc815\uad6c",
        HM: "\ud5c8\ub4dc\uc12c-\ub9e5\ub3c4\ub110\ub4dc\uc81c\ub3c4",
        HN: "\uc628\ub450\ub77c\uc2a4",
        HR: "\ud06c\ub85c\uc544\ud2f0\uc544",
        HT: "\uc544\uc774\ud2f0",
        HU: "\ud5dd\uac00\ub9ac",
        IC: "\uce74\ub098\ub9ac\uc544 \uc81c\ub3c4",
        ID: "\uc778\ub3c4\ub124\uc2dc\uc544",
        IE: "\uc544\uc77c\ub79c\ub4dc",
        IL: "\uc774\uc2a4\ub77c\uc5d8",
        IM: "\ub9e8 \uc12c",
        IN: "\uc778\ub3c4",
        IO: "\uc601\uad6d\ub839\uc778\ub3c4\uc591\uc2dd\ubbfc\uc9c0",
        IQ: "\uc774\ub77c\ud06c",
        IR: "\uc774\ub780",
        IS: "\uc544\uc774\uc2ac\ub780\ub4dc",
        IT: "\uc774\ud0c8\ub9ac\uc544",
        JE: "\uc800\uc9c0",
        JM: "\uc790\uba54\uc774\uce74",
        JO: "\uc694\ub974\ub2e8",
        JP: "\uc77c\ubcf8",
        KE: "\ucf00\ub0d0",
        KG: "\ud0a4\ub974\uae30\uc2a4\uc2a4\ud0c4",
        KH: "\uce84\ubcf4\ub514\uc544",
        KI: "\ud0a4\ub9ac\ubc14\uc2dc",
        KM: "\ucf54\ubaa8\ub85c\uc2a4",
        KN: "\uc138\uc778\ud2b8 \ud0a4\uce20 \ub124\ube44\uc2a4",
        KP: "\uc870\uc120 \ubbfc\uc8fc\uc8fc\uc758 \uc778\ubbfc \uacf5\ud654\uad6d",
        KR: "\ub300\ud55c\ubbfc\uad6d",
        KW: "\ucfe0\uc6e8\uc774\ud2b8",
        KY: "\ucf00\uc774\ub9e8\uc81c\ub3c4",
        KZ: "\uce74\uc790\ud750\uc2a4\ud0c4",
        LA: "\ub77c\uc624\uc2a4",
        LB: "\ub808\ubc14\ub17c",
        LC: "\uc138\uc778\ud2b8\ub8e8\uc2dc\uc544",
        LI: "\ub9ac\ud788\ud150\uc288\ud0c0\uc778",
        LK: "\uc2a4\ub9ac\ub791\uce74",
        LR: "\ub77c\uc774\ubca0\ub9ac\uc544",
        LS: "\ub808\uc18c\ud1a0",
        LT: "\ub9ac\ud22c\uc544\ub2c8\uc544",
        LU: "\ub8e9\uc148\ubd80\ub974\ud06c",
        LV: "\ub77c\ud2b8\ube44\uc544",
        LY: "\ub9ac\ube44\uc544",
        MA: "\ubaa8\ub85c\ucf54",
        MC: "\ubaa8\ub098\ucf54",
        MD: "\ubab0\ub3c4\ubc14",
        ME: "\ubaac\ud14c\ub124\uadf8\ub85c",
        MF: "\uc0dd \ub9c8\ub974\ud0f1",
        MG: "\ub9c8\ub2e4\uac00\uc2a4\uce74\ub974",
        MH: "\ub9c8\uc0ec \uad70\ub3c4",
        MK: "\ub9c8\ucf00\ub3c4\ub2c8\uc544",
        ML: "\ub9d0\ub9ac",
        MM: "\ubbf8\uc580\ub9c8",
        MN: "\ubabd\uace8",
        MO: "\ub9c8\uce74\uc624, \uc911\uad6d \ud2b9\ubcc4\ud589\uc815\uad6c",
        MP: "\ubd81\ub9c8\ub9ac\uc544\ub098\uc81c\ub3c4",
        MQ: "\ub9d0\ud2f0\ub2c8\ud06c",
        MR: "\ubaa8\ub9ac\ud0c0\ub2c8",
        MS: "\ubaac\ud2b8\uc138\ub77c\ud2b8",
        MT: "\ubab0\ud0c0",
        MU: "\ubaa8\ub9ac\uc154\uc2a4",
        MV: "\ubab0\ub514\ube0c",
        MW: "\ub9d0\ub77c\uc704",
        MX: "\uba55\uc2dc\ucf54",
        MY: "\ub9d0\ub808\uc774\uc2dc\uc544",
        MZ: "\ubaa8\uc7a0\ube44\ud06c",
        NA: "\ub098\ubbf8\ube44\uc544",
        NC: "\ub274 \uce7c\ub808\ub3c4\ub2c8\uc544",
        NE: "\ub2c8\uc81c\ub974",
        NF: "\ub178\ud37d\uc12c",
        NG: "\ub098\uc774\uc9c0\ub9ac\uc544",
        NI: "\ub2c8\uce74\ub77c\uacfc",
        NL: "\ub124\ub35c\ub780\ub4dc",
        NO: "\ub178\ub974\uc6e8\uc774",
        NP: "\ub124\ud314",
        NR: "\ub098\uc6b0\ub8e8",
        NU: "\ub2c8\uc6b0\uc5d0",
        NZ: "\ub274\uc9c8\ub79c\ub4dc",
        OM: "\uc624\ub9cc",
        PA: "\ud30c\ub098\ub9c8",
        PE: "\ud398\ub8e8",
        PF: "\ud504\ub791\uc2a4\ub839 \ud3f4\ub9ac\ub124\uc2dc\uc544",
        PG: "\ud30c\ud478\uc544\ub274\uae30\ub2c8",
        PH: "\ud544\ub9ac\ud540",
        PK: "\ud30c\ud0a4\uc2a4\ud0c4",
        PL: "\ud3f4\ub780\ub4dc",
        PM: "\uc0dd\ud53c\uc5d0\ub974 \ubbf8\ud074\ub871",
        PN: "\ud54f\ucf00\uc5b8 \uc12c",
        PR: "\ud478\uc5d0\ub974\ud1a0\ub9ac\ucf54",
        PS: "\ud314\ub808\uc2a4\ud0c0\uc778 \uc9c0\uad6c",
        PT: "\ud3ec\ub974\ud22c\uac08",
        PW: "\ud314\ub77c\uc6b0",
        PY: "\ud30c\ub77c\uacfc\uc774",
        QA: "\uce74\ud0c0\ub974",
        QO: "\uc624\uc138\uc544\ub2c8\uc544 \uc678\uacfd",
        RE: "\ub9ac\uc720\ub2c8\uc628",
        RO: "\ub8e8\ub9c8\ub2c8\uc544",
        RS: "\uc138\ub974\ube44\uc544",
        RU: "\ub7ec\uc2dc\uc544",
        RW: "\ub974\uc644\ub2e4",
        SA: "\uc0ac\uc6b0\ub514\uc544\ub77c\ube44\uc544",
        SB: "\uc194\ub85c\ubaac \uc81c\ub3c4",
        SC: "\uc250\uc774\uc258",
        SD: "\uc218\ub2e8",
        SE: "\uc2a4\uc6e8\ub374",
        SG: "\uc2f1\uac00\ud3ec\ub974",
        SH: "\uc138\uc778\ud2b8\ud5ec\ub808\ub098",
        SI: "\uc2ac\ub85c\ubca0\ub2c8\uc544",
        SJ: "\uc2a4\ubc1c\ubc14\ub974\uc81c\ub3c4-\uc580\ub9c8\uc6ec\uc12c",
        SK: "\uc2ac\ub85c\ubc14\ud0a4\uc544",
        SL: "\uc2dc\uc5d0\ub77c\ub9ac\uc628",
        SM: "\uc0b0\ub9c8\ub9ac\ub178",
        SN: "\uc138\ub124\uac08",
        SO: "\uc18c\ub9d0\ub9ac\uc544",
        SR: "\uc218\ub9ac\ub0a8",
        SS: "\ub0a8\uc218\ub2e8",
        ST: "\uc0c1\ud22c\uba54 \ud504\ub9b0\uc2dc\ud398",
        SV: "\uc5d8\uc0b4\ubc14\ub3c4\ub974",
        SX: "\uc2e0\ud2b8\ub9c8\ub974\ud134",
        SY: "\uc2dc\ub9ac\uc544",
        SZ: "\uc2a4\uc640\uc9c8\ub79c\ub4dc",
        TA: "\ud2b8\ub9ac\uc2a4\ud0c4\ub2e4\ucfe0\ub098",
        TC: "\ud130\ud06c\uc2a4\ucf00\uc774\ucee4\uc2a4\uc81c\ub3c4",
        TD: "\ucc28\ub4dc",
        TF: "\ud504\ub791\uc2a4 \ub0a8\ubd80 \uc9c0\ubc29",
        TG: "\ud1a0\uace0",
        TH: "\ud0dc\uad6d",
        TJ: "\ud0c0\uc9c0\ud0a4\uc2a4\ud0c4",
        TK: "\ud1a0\ucf08\ub77c\uc6b0",
        TL: "\ub3d9\ud2f0\ubaa8\ub974",
        TM: "\ud22c\ub974\ud06c\uba54\ub2c8\uc2a4\ud0c4",
        TN: "\ud280\ub2c8\uc9c0",
        TO: "\ud1b5\uac00",
        TR: "\ud130\ud0a4",
        TT: "\ud2b8\ub9ac\ub2c8\ub2e4\ub4dc \ud1a0\ubc14\uace0",
        TV: "\ud22c\ubc1c\ub8e8",
        TW: "\ub300\ub9cc",
        TZ: "\ud0c4\uc790\ub2c8\uc544",
        UA: "\uc6b0\ud06c\ub77c\uc774\ub098",
        UG: "\uc6b0\uac04\ub2e4",
        UM: "\ubbf8\uad6d\ub839 \ud574\uc678 \uc81c\ub3c4",
        US: "\ubbf8\uad6d",
        UY: "\uc6b0\ub8e8\uacfc\uc774",
        UZ: "\uc6b0\uc988\ubca0\ud0a4\uc2a4\ud0c4",
        VA: "\ubc14\ud2f0\uce78",
        VC: "\uc138\uc778\ud2b8\ube48\uc13c\ud2b8\uadf8\ub808\ub098\ub518",
        VE: "\ubca0\ub124\uc218\uc5d8\ub77c",
        VG: "\uc601\uad6d\ub839 \ubc84\uc9c4 \uc544\uc77c\ub79c\ub4dc",
        VI: "\ubbf8\uad6d\ub839 \ubc84\uc9c4 \uc544\uc77c\ub79c\ub4dc",
        VN: "\ubca0\ud2b8\ub0a8",
        VU: "\ubc14\ub204\uc544\ud22c",
        WF: "\uc648\ub9ac\uc2a4-\ud478\ud22c\ub098 \uc81c\ub3c4",
        WS: "\uc0ac\ubaa8\uc544",
        XK: "\ucf54\uc18c\ubcf4",
        YE: "\uc608\uba58",
        YT: "\ub9c8\uc694\ud2f0",
        ZA: "\ub0a8\uc544\ud504\ub9ac\uce74",
        ZM: "\uc7a0\ube44\uc544",
        ZW: "\uc9d0\ubc14\ube0c\uc6e8",
        ZZ: "\uc54c\ub824\uc9c0\uc9c0 \uc54a\uc740 \uc9c0\uc5ed"
    },
    custom: {
        all_flows: {
            app_prev_screen_index: "\uc774\uc804\ud654\uba74 \uae30\uc900",
            app_start: "\uc571\uc2dc\uc791",
            app_start_index: "\uc571 \uc2dc\uc791 \uae30\uc900",
            crash: "\ud06c\ub798\uc2dc",
            first_screen: "\ucc98\uc74c\ud654\uba74\uc73c\ub85c",
            flow_others: "\ud1b5\uacfc\uc728\uc774 5%\ubbf8\ub9cc\uc778 \uacbd\ub85c\uc758 \ud569",
            limit_message_html: "\ud604\uc7ac \uc0ac\uc6a9\ud750\ub984\uc740 11\ub2e8\uacc4\uae4c\uc9c0 \uc81c\uacf5\ub429\ub2c8\ub2e4.",
            normal: "\uc77c\ubc18\ud654\uba74",
            other_modal: {
                header: "\ud1b5\uacfc\uc728\uc774 5%\ubbf8\ub9cc\uc778 \ud654\uba74\ub4e4\uc758 \ud569\uc744 \ud45c\uc2dc\ud569\ub2c8\ub2e4.",
                page_info_html: "\ucd1d <b>%{total}</b>\uac1c \ud654\uba74 \uc911 <b>%{start}</b> - <b>%{end}</b>"
            },
            other_screen: "\uae30\ud0c0 \ud654\uba74",
            percent_index: "\uc794\uc874\uc728 \ud45c\uc2dc \uae30\uc900",
            prev_screen: "\uc774\uc804\ud654\uba74",
            quit: "\uc571\uc885\ub8cc",
            screen_count: "\ud654\uba74\uac1c\uc218",
            session: "\uc138\uc158\uc218",
            waiting_message_html: "\uc120\ud0dd\ud55c \ud544\ud130\uc5d0 \ud574\ub2f9\ud558\ub294 \ub370\uc774\ud130\uac00 \uc5c6\uc2b5\ub2c8\ub2e4. \uc0c1\ub2e8\uc758 \uc0ac\uc6a9\uc790, \uad6d\uac00, \ubc84\uc804, \ub0a0\uc9dc\ud544\ud130\ub97c \uc870\uc815\ud574\uc8fc\uc138\uc694.",
            zoom_in_out: "\ub192\uc774 \ud655\ub300/\ucd95\uc18c"
        },
        all_screens: {
            indicators: {
                actions: "\uc2a4\ud06c\ub9b0\ubdf0\ub2f9 \uc561\uc158",
                all: "\uc804\uccb4",
                crashed: "\ud06c\ub798\uc2dc",
                exited: "\uc571\uc885\ub8cc",
                screen_views: "\uc2a4\ud06c\ub9b0\ubdf0",
                sessions: "\uc138\uc158",
                taps_un: "\ubb34\ubc18\uc751 \ud0ed \ube44\uc728",
                total_duration: "\uc2a4\ud06c\ub9b0\ubdf0\ub2f9 \uccb4\ub958\uc2dc\uac04",
                unique_users: "\uc77c\ud3c9\uade0 \uc0ac\uc6a9\uc790"
            },
            page_info_html: "\ucd1d <b>%{total_count}</b>\uac1c \ud654\uba74 \uc911 <b>%{screen_count}</b>\uac1c \ub370\uc774\ud130 \uc218\uc9d1\ub428, %{page_info}\uac1c \ud45c\uc2dc"
        },
        apps: {
            add: "\uc571 \ucd94\uac00",
            add_member_sub: "\uc774\uba54\uc77c\uc744 \uc785\ub825\ud574 \uc8fc\uc138\uc694",
            add_member_title: "\uc0c8 \uba64\ubc84 \ucd08\ub300",
            addable_cnt: "\uad00\ub9ac\uc911\uc778 \uc571 \uc218",
            api_key: "API \ud0a4",
            app_create_success_html: " \uc571 \ucd94\uac00 \uc131\uacf5!",
            app_name_placeholder: "\uc571\uc774\ub984\uc744 \uc5ec\uae30 \uc801\uc5b4\uc8fc\uc138\uc694.",
            change_plan: "\ud50c\ub79c \ubcc0\uacbd",
            change_plan_describe_html: "\ud50c\ub79c \ubcc0\uacbd\uc744 \uc6d0\ud558\ub294 \uc571\uc744 \uc120\ud0dd \ud6c4, \uc801\uc6a9\ud560 \ud50c\ub79c\uc744 \uc120\ud0dd\ud574\uc8fc\uc138\uc694 *\ud50c\ub79c\uc740 <span>\uc571 \ubcc4</span>\ub85c \uac01\uac01 \uc801\uc6a9\ub429\ub2c8\ub2e4.",
            check_total_sv: "\ucd1d \uc2a4\ud06c\ub9b0\ubdf0 \ud655\uc778",
            copy_to_clipboard: "\ud074\ub9bd\ubcf4\ub4dc\uc5d0 \ubcf5\uc0ac",
            dev_mode: "Test \ubaa8\ub4dc",
            enterprise_describe: "\uc2a4\ud06c\ub9b0\ubdf0 \uc0ac\uc6a9\ub7c9 \ud611\uc758",
            enterprise_price: "\uac00\uaca9 \ud611\uc758",
            fail_create: "\uc571 \uc0dd\uc131\uc5d0 \uc2e4\ud328\ud588\uc2b5\ub2c8\ub2e4.",
            free_describe: "\uc6d4 ~50\ub9cc \uc2a4\ud06c\ub9b0\ubdf0",
            free_price_html: "<span>\u20a9</span>0",
            is_integration: "\ub370\uc774\ud130 \uc5f0\ub3d9 \uc5ec\ubd80",
            limit_free_mode: "\uc720\uc800\ud574\ube57 \ubb34\ub8cc \uccb4\ud5d8\uae30\uac04\uc774 %{limit}\uc77c \ub0a8\uc558\uc2b5\ub2c8\ub2e4.",
            mode: "\ubaa8\ub4dc",
            need_admin_role: "\uad00\ub9ac\uc790\ub9cc \uc811\uadfc\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.",
            need_sdk: "\ub370\uc774\ud130\ub97c \ud655\uc778\ud558\uc2dc\ub824\uba74 SDK\ub97c \uc5f0\ub3d9\ud574\uc8fc\uc138\uc694",
            no_have_app: "\uc571\uc774 \uc5c6\uc2b5\ub2c8\ub2e4. \uc0c8 \uc571\uc744 \ucd94\uac00\ud574 \uc8fc\uc138\uc694",
            no_sdk_integration: "\uc5f0\ub3d9 \uc548 \ub428",
            not_now: "\ub2e4\uc74c\uc5d0 \ucd94\uac00\ud558\uae30",
            not_resisted_store: "\uc544\uc9c1 \ub9c8\ucf13\uc5d0 \ub4f1\ub85d\ub418\uc9c0 \uc54a\uc740 \uc571 \uc785\ub2c8\ub2e4.",
            plan_upgrade: "\uc5c5\uadf8\ub808\uc774\ub4dc",
            prd_mode: "Production \ubaa8\ub4dc",
            promotion_describe_html: "2\uac1c\uc6d4 \ub3d9\uc548<br/>\uc2a4\ud06c\ub9b0\ubdf0 <b>\ubb34\uc81c\ud55c</b>",
            promotion_price_html: "<span>\u20a9</span>90,000",
            promotion_sub_describe: "\ucd5c\ucd08 \uc2e0\uccad\uc2dc\uc5d0\ub9cc \uac00\ub2a5",
            register_app: "\uc571 \ub4f1\ub85d\ud558\uae30",
            remain_views: "\uc2a4\ud06c\ub9b0\ubdf0 \uc794\uc5ec\ub7c9",
            sdk_integration: "SDK \uc2ec\uae30",
            select_plan: "\ubcc0\uacbd\ud560 \ud50c\ub79c \uc120\ud0dd",
            select_platform: "\ud50c\ub7ab\ud3fc \uc120\ud0dd",
            send_mail: "\uba54\uc77c \ubcf4\ub0b4\uae30",
            set_api_key: "API \ud0a4 \uc124\uc815",
            show_api_key: "API \ud0a4 \ubcf4\uae30",
            show_manageable: "\uad00\ub9ac\uc911\uc778 \uc571\ub9cc \ubcf4\uae30",
            startup_describe: "\uc6d4 ~2,000\ub9cc \uc2a4\ud06c\ub9b0\ubdf0",
            startup_price_html: "<span>\u20a9</span>100,000<span>/\uc6d4</span>",
            startup_sub_describe_html: "\uc0ac\uc6a9\ub7c9 \ucd08\uacfc\uc2dc<br/>20\ub9cc \uc2a4\ud06c\ub9b0\ubdf0\ub2f9 1,000\uc6d0 \uacfc\uae08",
            success_message_html: "\ub370\uc774\ud130 \ubd84\uc11d\uc744 \uc2dc\uc791\ud558\ub824\uba74 \uc720\uc800\ud574\ube57 SDK \uc5f0\ub3d9\uc774 \ud544\uc694\ud569\ub2c8\ub2e4.<br/> <a href='%{sdk_guide}' target='_blank' class='added_modal_link'><button class='guide-btn'>\uac00\uc774\ub4dc \ubb38\uc11c</button></a> \ub97c \ucc38\uace0\ud558\uc5ec \uc9c1\uc811 \uc5f0\ub3d9\ud558\uac70\ub098<br> \ud544\uc694\ud55c \uacbd\uc6b0, \uac1c\ubc1c\uc790\uc5d0\uac8c \ub3c4\uc6c0\uc744 \uc694\uccad\ud558\uc138\uc694.",
            to_developer: "\uac1c\ubc1c\uc790\uc5d0\uac8c SDK \uc5f0\ub3d9 \uc694\uccad (\uc120\ud0dd \uc0ac\ud56d)"
        },
        crash_analytics: {
            all_session: "\uc804\uccb4 \uc138\uc158 \uc911",
            all_session_tooltip: "\uc804\uccb4 \uc138\uc158 : %{count}",
            all_user: "\uc804\uccb4 \uc0ac\uc6a9\uc790 \uc911",
            all_user_tooltip: "\uc804\uccb4 \uc0ac\uc6a9\uc790 : %{count}",
            app_version: "\uc571 \ubc84\uc804",
            crash_count: "\ud06c\ub798\uc2dc\uc218",
            crash_detail: "\ud06c\ub798\uc2dc \ubd84\uc11d",
            crash_free_user: "\ud06c\ub798\uc2dc \uc5c6\ub294 \uc0ac\uc6a9\uc790 \ube44\uc728",
            crash_info: "\ud06c\ub798\uc2dc \uc815\ubcf4",
            crash_info_2_html: "\ud06c\ub798\uc2dc \uc720\ud615\uc740 <b>2018-01-01</b> \ubd80\ud130 \ud655\uc778\ud558\uc2e4 \uc218 \uc788\uc2b5\ub2c8\ub2e4.",
            crash_info_html: "\ud06c\ub798\uc2dc \uc720\ud615\uc740 <b>2017-08-20</b> \ubd80\ud130 \ud655\uc778\ud558\uc2e4 \uc218 \uc788\uc2b5\ub2c8\ub2e4.",
            crash_list_header: {
                app_version: "\uc571 \ubc84\uc804",
                count: "\ud06c\ub798\uc2dc\uc218",
                issue: "\uc774\uc288",
                stack_trace: "\uc2a4\ud0dd \ud2b8\ub808\uc774\uc2a4",
                status: "\uc0c1\ud0dc",
                user: "\uc0ac\uc6a9\uc790\uc218"
            },
            crash_trend: "\ud06c\ub798\uc2dc \ud2b8\ub80c\ub4dc",
            crash_type: "\ubcf4\uace0\ub41c \ud06c\ub798\uc2dc \uc720\ud615",
            crash_type_list: "\ud06c\ub798\uc2dc \uc720\ud615 \ubaa9\ub85d",
            crash_user: "\ud06c\ub798\uc2dc \ubc1c\uc0dd \uc0ac\uc6a9\uc790\uc218",
            detail_info: "\uc0c1\uc138 \uc815\ubcf4",
            devices: "\ub514\ubc14\uc774\uc2a4",
            lase_24hour: "\ucd5c\uadfc 24\uc2dc\uac04",
            main_indicators: "\ud06c\ub798\uc2dc \uc8fc\uc694 \uc9c0\ud45c",
            no_have: "\ubcf4\uace0\ub41c \ud06c\ub798\uc2dc \uc720\ud615\uc774 \uc5c6\uc2b5\ub2c8\ub2e4.",
            os_version: "OS \ubc84\uc804",
            page_info_html: '\ucd1d <b class="total">-</b>\uac1c\uc911 <b class="range">-</b>\uac1c',
            replay_list_html: "<b>\ub9ac\ud50c\ub808\uc774</b> \ub9ac\uc2a4\ud2b8",
            save: "\uc800\uc7a5",
            session: "\uc138\uc158",
            session_info: "\uc138\uc158 \uc815\ubcf4",
            session_list: "\ud574\ub2f9 \ud06c\ub798\uc2dc \ud3ec\ud568 \uc138\uc158 \ubaa9\ub85d",
            session_page_info_html: "\ud574\ub2f9 \ud06c\ub798\uc2dc \ud3ec\ud568 \uc138\uc158 <b>%{count}</b>\uac1c",
            show_replay: "\ub9ac\ud50c\ub808\uc774 \ubcf4\uae30",
            show_unsolved: "\ubbf8\ud574\uacb0 \ud06c\ub798\uc2dc\ub9cc \ubcf4\uae30",
            solved: "\ud574\uacb0",
            stack_trace: "\uc2a4\ud0dd \ud2b8\ub808\uc774\uc2a4",
            summarize: {
                indicator: "\uc9c0\ud45c",
                title: "\uc720\ud615 \uc694\uc57d",
                trend: "\ud06c\ub798\uc2dc \ud2b8\ub80c\ub4dc"
            },
            type: "\uc720\ud615",
            unsolved: "\ubbf8\ud574\uacb0",
            user_info: "\uc0ac\uc6a9\uc790 \uc815\ubcf4"
        },
        dashboard: {
            a_day_ago: "\uc774\uc804 1 \uc77c",
            action_count: "\uc561\uc158\uc218",
            avg_last_month: "\uc774\uc804 28\uc77c \ud3c9\uade0",
            avg_last_week: "\uc774\uc804 7\uc77c \ud3c9\uade0",
            date_html: "<b>%{ddate}</b>",
            error_refresh: "\uc5d0\ub7ec\ubc1c\uc0dd! \ub9ac\ud504\ub798\uc2dc\ud574\uc8fc\uc138\uc694!!",
            flow_title: "\uc774\ub3d9\uacbd\ub85c \ubd84\uc11d",
            last_version: "\ucd5c\uc2e0 \uc571 \ubc84\uc804",
            max_flow: "\ucd5c\uc7a5 \uacbd\ub85c",
            min_flow: "\ucd5c\ub2e8 \uacbd\ub85c",
            move_count: "\uc2a4\ud06c\ub9b0\ubdf0 \uc218",
            new_user: "\uc2e0\uaddc \uc0ac\uc6a9\uc790\uc218",
            new_user_ratio: "\uc2e0\uaddc \uc0ac\uc6a9\uc790 \ube44\uc728",
            no_change: "-",
            no_data: "\ub370\uc774\ud130 \uc5c6\uc74c",
            ratio: "\ube44\uc728",
            return_user: "\uc7ac\ubc29\ubb38 \uc0ac\uc6a9\uc790\uc218",
            screen_and_flow: "\ud654\uba74 \ubc0f \uc774\ub3d9\uacbd\ub85c",
            screenview_distribution_graph: "\uc2a4\ud06c\ub9b0\ubdf0 \uc218 \ubd84\ud3ec",
            sdk_alert: {
                update_message: "SDK\uac00 \uc5c5\ub370\uc774\ud2b8 \ub418\uc5c8\uc2b5\ub2c8\ub2e4. \ucd5c\uc2e0\ubc84\uc804\uc73c\ub85c \uc774\uc6a9\ud574\uc8fc\uc138\uc694."
            },
            session: "\uc138\uc158\uc218",
            sub_title: {
                indicators: {
                    daily_html: '\uc77c\uac04 \uae30\uc900 <b><span class="today-date">Loading...</span></b>',
                    realtime_html: "\uc2e4\uc2dc\uac04 \uae30\uc900 <b>%{date}</b>"
                }
            },
            titles: {
                action_activity: "\ud589\ub3d9 \ud65c\uc131\ub3c4",
                actions: "\uc561\uc158\ubd84\uc11d",
                app_activity: "\uc571 \ud65c\uc131\ub3c4",
                app_version: "\uc571 \ubc84\uc804",
                avg: {
                    action: "\uc138\uc158\ub2f9 \uc561\uc158\uc218",
                    duration: "\uc138\uc158\ub2f9 \uccb4\ub958\uc2dc\uac04",
                    screen_view: "\uc138\uc158\ub2f9 \uc2a4\ud06c\ub9b0\ubdf0",
                    session: "\uc0ac\uc6a9\uc790\ub2f9 \ubc29\ubb38\uc218",
                    unique_view: "\uc138\uc158\ub2f9 \uc720\ub2c8\ud06c\ubdf0"
                },
                country_info: "\uad6d\uac00\uc815\ubcf4",
                crash: "\ud06c\ub798\uc2dc",
                crash_count: "\ud06c\ub798\uc2dc\uc218",
                crash_ratio: "\ud06c\ub798\uc2dc \ube44\uc728",
                crashes: "\ud06c\ub798\uc2dc",
                device: "\ub514\ubc14\uc774\uc2a4",
                flow: "\ud3c9\uade0\uc774\ub3d9\uc218 \ubd84\ud3ec",
                flow_graph: "\ud654\uba74\uc774\ub3d9\uc218 \ubd84\ud3ec",
                indicators: {
                    daily: "\uc8fc\uc694 \uc77c\uac04 \uc9c0\ud45c",
                    realtime: "\uc2e4\uc2dc\uac04 \uc9c0\ud45c",
                    userhabit: "\uc720\uc800\ud574\ube57 \uc9c0\ud45c"
                },
                new_user: "\uc2e0\uaddc \uc0ac\uc6a9\uc790",
                new_users: "\uc2e0\uaddc & \uc7ac\ubc29\ubb38 \uc0ac\uc6a9\uc790",
                os_version: "OS \ubc84\uc804",
                platform_version: "\ud50c\ub7ab\ud3fc \ubc84\uc804",
                resolution: "\ud574\uc0c1\ub3c4",
                return_user: "\uc7ac\ubc29\ubb38 \uc0ac\uc6a9\uc790",
                session: "\uc138\uc158\uc218",
                session_user: "\uc138\uc158 & \uc0ac\uc6a9\uc790 (DAU, WAU, MAU)",
                tech_info: "\uae30\uc220\uc815\ubcf4",
                total: {
                    action: "\ucd1d \uc561\uc158\uc218",
                    duration: "\ucd1d \uccb4\ub958\uc2dc\uac04",
                    screen_view: "\ucd1d \uc2a4\ud06c\ub9b0\ubdf0",
                    session: "\ucd1d \uc138\uc158\uc218",
                    user: "\ucd1d \uc0ac\uc6a9\uc790"
                },
                un_tap_count: "\ubb34\ubc18\uc751 \ud0ed \uc218",
                un_tap_ratio: "\ubb34\ubc18\uc751 \ud0ed \ube44\uc728",
                user: "\uc0ac\uc6a9\uc790"
            },
            total_flows: "\uacbd\ub85c\uc758 \uc885\ub958",
            total_screens: "\ucd1d \ud654\uba74\uc218",
            user: "\uc0ac\uc6a9\uc790\uc218",
            version_trend: "\uc571 \ubc84\uc804 \uc810\uc720\uc728",
            version_trend_radio: {
                order: "\ucd5c\uc2e0\ubc84\uc804",
                session: "\uc810\uc720\uc728"
            },
            view_all: "\uc804\uccb4\ubcf4\uae30",
            week_legend: "%{year}\ub144 %{month}\uc6d4 %{date}\uc77c \uc8fc\uac04",
            weekly_filter: "\uc8fc\uac04 \ud544\ud130"
        },
        developer_page: {
            add_member: "\uc5d0 \uba64\ubc84 \ucd94\uac00",
            api_key: "API \ud0a4",
            app_create_date: "\uc571 \uc0dd\uc131\ub0a0\uc9dc",
            app_delete_notice_content_html: "<b>%{app_name}</b><span class='uh-platform %{os}'>%{os}</span> \uc571\uc758 \ubaa8\ub4e0 \ub370\uc774\ud130\uac00 \uc0ad\uc81c\ub429\ub2c8\ub2e4. <br/> \uc0ad\uc81c\ub41c \ub370\uc774\ud130\ub294 \ubcf5\uad6c\ub420 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4. <br/><br/> \uadf8\ub798\ub3c4 \uc0ad\uc81c\ub97c \uc6d0\ud558\uc2dc\uba74 \uc544\ub798\uc758 \uce78\uc5d0 <b>'<span id='app-delete-notice-del-txt'>\uc0ad\uc81c</span>'</b>\ub97c \uc785\ub825\ud574\uc8fc\uc138\uc694.",
            app_delete_notice_title: "\uc571\uc744 \uc815\ub9d0\ub85c \uc0ad\uc81c \ud558\uc2dc\uaca0\uc2b5\ub2c8\uae4c?",
            app_name: "\uc571 \uc774\ub984",
            app_name_edit_duplicate: "\uac19\uc740 \uc774\ub984\uc785\ub2c8\ub2e4. \ub2e4\uc2dc \uc785\ub825\ud574\uc8fc\uc138\uc694.",
            app_name_edit_fail: "\uc571 \uc774\ub984\uc744 \uc785\ub825\ud574\uc8fc\uc138\uc694.",
            app_name_edit_success: "\uc131\uacf5\uc801\uc73c\ub85c \ubcc0\uacbd\ub418\uc5c8\uc2b5\ub2c8\ub2e4.",
            basic_info: "\uae30\ubcf8\uc815\ubcf4",
            check_in_sdk_page: "<p>\uc790\uc138\ud55c SDK \ud1b5\ud569 \ubc29\ubc95\uc740 <a href='%{sdk_guide}' class='jumper' target='_blank'>SDK \uc124\uce58 \uac00\uc774\ub4dc</a>\ud398\uc774\uc9c0\uc5d0\uc11c \ud655\uc778\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.</p>",
            check_sk_user_api_key: "SK T developers \ud648\ud398\uc774\uc9c0\uc5d0\uc11c \ud504\ub85c\uc81d\ud2b8 API KEY\ub97c \ud655\uc778\ud574\uc8fc\uc138\uc694.",
            clipboard_copied: "\ud074\ub9bd\ubcf4\ub4dc\uc5d0 \ubcf5\uc0ac\ub418\uc5c8\uc2b5\ub2c8\ub2e4.",
            dev_mode: "Test \ubaa8\ub4dc",
            img_capture: "[Test \ubaa8\ub4dc] \uc790\ub3d9 \uc2a4\ud06c\ub9b0\uc0f7 \uc218\uc9d1 \ubaa8\ub4dc",
            img_capture_notice_html: "Test \ubaa8\ub4dc\uc5d0\uc11c \uc218\uc9d1\ud558\ub294 \uc2a4\ud06c\ub9b0\uc0f7 \uc218\uc9d1 \ubaa8\ub4dc\ub97c \ucf1c\uace0 \ub04c \uc218 \uc788\uc2b5\ub2c8\ub2e4.<br/>(\uc124\uc815\uc774 \uc801\uc6a9\ub418\ub294 \ub370 \uc218 \ucd08\uac00 \uac78\ub9ac\uba70 \uc571\uc774 \uc644\uc804\ud788 \uc885\ub8cc\ub418\uace0 \uc0c8\ub85c \uc2dc\uc791\ub41c \uc138\uc158\ubd80\ud130 \uc801\uc6a9\ub429\ub2c8\ub2e4.)",
            is_intergrated: "\ub370\uc774\ud130 \uc5f0\ub3d9 \uc5ec\ubd80",
            management_member: "\uba64\ubc84 \uad00\ub9ac",
            message: {
                ext_error: "\ud14d\uc2a4\ud2b8(txt) \ud30c\uc77c\ub85c \ub41c \ub9f5\ud551(mapping) \ud30c\uc77c\ub9cc \uc5c5\ub85c\ub4dc\uac00 \uac00\ub2a5\ud569\ub2c8\ub2e4.",
                map_fail: "\ub9f5\ud551\ud560 \ub0b4\uc6a9\uc774 \uc5c6\uac70\ub098 \ub9f5\ud551 \uac00\ub2a5\ud55c \ud615\ud0dc\uc758 \ud30c\uc77c\uc774 \uc544\ub2d9\ub2c8\ub2e4.",
                map_success: "%{filename}\uc73c\ub85c \ub9f5\ud551\uc774 \uc131\uacf5\uc801\uc73c\ub85c \uc774\ub8e8\uc5b4 \uc84c\uc2b5\ub2c8\ub2e4.",
                max_exceeded: "\uc5c5\ub85c\ub4dc \uac00\ub2a5\ud55c \ud30c\uc77c \uc0ac\uc774\uc988\ub97c \ucd08\uacfc\ud558\uc600\uc2b5\ub2c8\ub2e4. (5 MB)"
            },
            mode: "\ubaa8\ub4dc",
            monthly_usage: "\uc6d4\ubcc4 \uc0ac\uc6a9\ud604\ud669",
            need_source_attach_checkpoints: "\ucf54\ub4dc \uc0bd\uc785\uc774 \ud544\uc694\ud55c \uccb4\ud06c\ud3ec\uc778\ud2b8",
            no_have_member: "\uba64\ubc84\uac00 \uc5c6\uc2b5\ub2c8\ub2e4.",
            no_intergrated: "\uc5f0\ub3d9 \uc548 \ub428",
            no_last_version: "\ucd5c\uc2e0 \ubc84\uc804\uc774 \uc544\ub2d9\ub2c8\ub2e4.",
            no_matched_checkpoint: "\ud574\ub2f9\ub418\ub294 \uccb4\ud06c\ud3ec\uc778\ud2b8\uac00 \uc5c6\uc2b5\ub2c8\ub2e4",
            not_integrated: "\ubd84\uc11d\uc744 \uc2dc\uc791\ud558\ub824\uba74 SDK\ub97c \uc124\uce58\ud574\uc8fc\uc138\uc694.",
            not_integrated_sdk: "\uc5f0\ub3d9\ub418\uc9c0 \uc54a\uc740 SDK\uac00 \uc788\uc2b5\ub2c8\ub2e4. \uc544\ub798 \uc815\ubcf4\ub97c \ud655\uc778 \ud6c4 SDK\ub97c \uc5f0\ub3d9\ud574\uc8fc\uc138\uc694.",
            not_need_source_attach_checkpoints: "\ucf54\ub4dc \uc0bd\uc785 \uc644\ub8cc\ub41c \uccb4\ud06c\ud3ec\uc778\ud2b8",
            pass_confirm: "\ube44\ubc00\ubc88\ud638 \ud655\uc778",
            prd_mode: "Production \ubaa8\ub4dc",
            receive_report: "\uc8fc\uac04\ub9ac\ud3ec\ud2b8 \uad6c\ub3c5",
            referrer_feature: {
                address_for_move: "\uc774\ub3d9\uc2dc\ud0ac \uc8fc\uc18c",
                generated_URL: "\uc0dd\uc131\ub41c URL",
                is_merge_referrer_data: "\uc804\uc1a1\uc2dc \ub808\ud37c\ub7f4 \ub370\uc774\ud130 Merge \uc5ec\ubd80",
                make_link: "\ub9c1\ud06c \uc0dd\uc131",
                ping_method: "\ud551 \ubc29\uc2dd",
                ping_method_explanation: '\ud551 \ubc29\uc2dd\uc740 Userhabit \uc11c\ubc84\ub85c \ub808\ud37c\ub7f4 \uc815\ubcf4\ub97c Restful\ud615\uc2dd\uc73c\ub85c \ud1b5\uc9c0\ud558\ub294 \uac83\uc785\ub2c8\ub2e4. "200 OK"\uac00 \ub3cc\uc544\uc624\uba74 \uc131\uacf5, \uadf8 \uc774\uc678\uc758 \uacbd\uc6b0 \uc2e4\ud328\uc785\ub2c8\ub2e4.',
                redirection_URL: "\ub9ac\ub2e4\uc774\ub809\uc158 \ub418\ub294 URL",
                redirection_method: "\ub9ac\ub2e4\uc774\ub809\uc158 \ubc29\uc2dd",
                redirection_method_explanation: "\ub9ac\ub2e4\uc774\ub809\uc158 \ubc29\uc2dd\uc740 Userhabit \uc11c\ubc84\ub85c \ub808\ud37c\ub7f4 \uc815\ubcf4\ub97c \ud1b5\uc9c0\ud558\uba74\uc11c \ub2e4\ub978 url\ub85c \ub9ac\ub2e4\uc774\ub809\uc158 \ud558\ub294 \uac83\uc744 \ub9d0\ud569\ub2c8\ub2e4. \uc774 \uacbd\uc6b0 \uc131\uacf5/\uc2e4\ud328 \uc0c1\uad00 \uc5c6\uc774 \ubb34\uc870\uac74 \uc9c0\uc815\ub41c url\ub85c \uacbd\ub85c\ub97c \ub9ac\ub2e4\uc774\ub809\uc158 \uc2dc\ud0b5\ub2c8\ub2e4.",
                referrer_data: "\ub808\ud37c\ub7f4 \ub370\uc774\ud130(QueryString \ud615\uc2dd, \uc608: abc=123&def=klm)",
                referrer_for_save: "\uc720\uc800\ud574\ube57\uc5d0 \uc800\uc7a5\ub420 Referrer",
                referrer_key: "\ub808\ud37c\ub7f4\uc6a9 key",
                referrer_link_traking: "\ub808\ud37c\ub7f4 \ub9c1\ud06c \ucd94\uc801"
            },
            screen_view_mount_by_app: "\uc571\ubcc4 \uc2a4\ud06c\ub9b0\ubdf0 \uc0ac\uc6a9\ub7c9",
            sdk_info: "SDK \uc815\ubcf4",
            sdk_not_intalled: "SDK\uac00 \uc544\uc9c1 \uc124\uce58\ub418\uc9c0 \uc54a\uc558\uc2b5\ub2c8\ub2e4.",
            sdk_updated: "SDK\uac00 \ucd5c\uc2e0 \ubc84\uc804\uc774 \uc544\ub2d9\ub2c8\ub2e4. \ucd5c\uc2e0 \ubc84\uc804\uc758 SDK\ub97c \uc801\uc6a9\ud574\uc8fc\uc138\uc694.",
            sdk_version_info: "SDK \ubc84\uc804 \uc815\ubcf4",
            show_integration_guide: "\ud1b5\ud569 \uac00\uc774\ub4dc \ubcf4\uae30",
            upload_all: "\ub124\ud2b8\uc6cc\ud06c \ud658\uacbd\uc5d0 \uad00\uacc4\uc5c6\uc774 \ubaa8\ub4e0 \ub370\uc774\ud130 \uc5c5\ub85c\ub4dc",
            upload_in_wifi: "\ubaa8\ub4e0 \ub370\uc774\ud130\ub97c \uc640\uc774\ud30c\uc774\ud658\uacbd\uc77c \ub54c\ub9cc \uc5c5\ub85c\ub4dc",
            upload_in_wifi_notice: "\uc218\uc9d1\ud558\ub294 \ub370\uc774\ud130\uac00 \uc81c\ud55c\ub420 \uc218 \uc788\uc2b5\ub2c8\ub2e4.",
            upload_in_wifi_popup_subnotice_html: "\uadf8\ub798\ub3c4 \uc5c5\ub85c\ub4dc\uc124\uc815\uc744 \ubcc0\uacbd\ud558\uc2dc\ub824\uba74 \ud655\uc778\ubc84\ud2bc\uc744 \ub20c\ub7ec\uc8fc\uc138\uc694.<br/>*\ubcc0\uacbd\ub41c \uc124\uc815\uc774 \uc801\uc6a9\ub418\ub824\uba74 \uc57d 1\ubd84 \uc815\ub3c4 \uc18c\uc694\ub429\ub2c8\ub2e4.",
            upload_not_supported: "SDK\uac00 \ucd5c\uc2e0 \ubc84\uc804\uc774 \uc544\ub2d9\ub2c8\ub2e4. \ucd5c\uc2e0 \ubc84\uc804\uc758 SDK\ub97c \uc801\uc6a9\ud574\uc8fc\uc138\uc694.",
            upload_policy: "[Production \ubaa8\ub4dc] \uc5c5\ub85c\ub4dc \uc124\uc815",
            upload_policy_notice: "\uc571 \uc0ac\uc6a9\uc790\ub4e4\uc758 \ub370\uc774\ud130 \uc0ac\uc6a9\ub7c9\uc744 \uc704\ud574 \ub124\ud2b8\uc6cc\ud06c \ud658\uacbd\uc5d0 \ub530\ub77c \uc218\uc9d1\ud558\ub294 \ud56d\ubaa9\uc744 \uc81c\ud55c\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.<br/>(\ubcf8 \uc124\uc815\uc740 Production \ubaa8\ub4dc\uc5d0\uc11c \uc801\uc6a9\ub429\ub2c8\ub2e4.)",
            upload_screenshot_in_wifi: "\uc2a4\ud06c\ub9b0\uc0f7\uc740 \uc640\uc774\ud30c\uc774\ud658\uacbd\uc77c \ub54c\ub9cc \uc5c5\ub85c\ub4dc"
        },
        developers: {
            proguard_mapping_desc_html: "<p>ProGuard\ub85c \ub09c\ub3c5\ud654\ub418\uc5b4 \ub4e4\uc5b4\uc628 \ud654\uba74(Activity) \uc774\ub984\uc744 \ub9f5\ud551 \ud30c\uc77c \uc5c5\ub85c\ub4dc\ub97c \ud1b5\ud574 \uc6d0\ub798\uc758 \uc774\ub984\uc73c\ub85c \ubcc0\ud658 \uc2dc\ucf1c\uc90d\ub2c8\ub2e4.<br/>*\ud604\uc7ac DexGuard\ub294 \uc9c0\uc6d0\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4.</p>",
            uploaded_at: "\uc5c5\ub85c\ub4dc\ub41c \ub0a0\uc9dc"
        },
        guide: {
            console_tip: "Tip",
            head_app_views: {
                double_tap: "<b>\ub354\ube14\ud0ed</b>:<br/> \ub450 \ubc88 \uc5f0\uc18d \ud130\uce58\ud55c \ud0ed\uc744 \ud788\ud2b8\ub9f5\uc5d0 \ud45c\uc2dc\ud569\ub2c8\ub2e4.",
                first_press: "<b>\uccab\ubc88\uc9f8 \uc561\uc158</b>:<br/> \ud654\uba74\uc774\ub3d9 \ud6c4 \uccab\ubc88\uc9f8\ub85c \ud130\uce58\ud55c \ud0ed\uc744 \ud788\ud2b8\ub9f5\uc5d0 \ud45c\uc2dc\ud569\ub2c8\ub2e4.",
                help: "\uc804\uccb4 \ub514\ubc14\uc774\uc2a4 \ud544\ud130\ub97c \uc120\ud0dd\ud588\uc744 \ub54c, \ud574\ub2f9 \ud654\uba74\uc740 \ubaa8\ub4e0 \ub514\ubc14\uc774\uc2a4\uc758 \ud654\uba74\uc744 \ub300\ud45c\ud558\uc5ec \uac00\uc7a5 \ub9ce\uc740 \uc138\uc158\uc744 \uac00\uc9c4 \ud654\uba74\uc73c\ub85c \ubcf4\uc5ec\uc9d1\ub2c8\ub2e4.<br/><br/> <b><img width='18' src='/assets/img_screen_guide_object.png'/> \uc624\ube0c\uc81d\ud2b8 \uae30\uc900: \uc804\uccb4 \ub514\ubc14\uc774\uc2a4 \ub370\uc774\ud130<br/> <img width='18' src='/assets/img_screen_guide_heatmap.png'/> \ud788\ud2b8\ub9f5 \uae30\uc900: \uac00\uc7a5 \uc138\uc158\uc774 \ub9ce\uc740 \ub514\ubc14\uc774\uc2a4 \ub370\uc774\ud130</b>",
                long_press: "<b>\ub871\ud504\ub808\uc2a4</b>:<br/> 500ms\uc774\uc0c1 \ud130\uce58\ud55c \ud0ed\uc744 \ud788\ud2b8\ub9f5\uc5d0 \ud45c\uc2dc\ud569\ub2c8\ub2e4.",
                responsed_click: "<b>\ubc18\uc751\uc788\ub294 \ud0ed</b>:<br/> \ud654\uba74\uc744 \ud130\uce58\ud588\uc744 \ub54c \uc561\uc158\uc774 \ubc1c\uc0dd\ud55c \ud0ed\uc744 \ud788\ud2b8\ub9f5\uc5d0 \ud45c\uc2dc\ud569\ub2c8\ub2e4.",
                second_press: "<b>\ub450\ubc88\uc9f8 \uc561\uc158</b>:<br/> \ud654\uba74\uc774\ub3d9 \ud6c4 \ub450\ubc88\uc9f8\ub85c \ud130\uce58\ud55c \ud0ed\uc744 \ud788\ud2b8\ub9f5\uc5d0 \ud45c\uc2dc\ud569\ub2c8\ub2e4.",
                third_press: "<b>\uc138\ubc88\uc9f8 \uc561\uc158</b>:<br/> \ud654\uba74\uc774\ub3d9 \ud6c4 \uc138\ubc88\uc9f8\ub85c \ud130\uce58\ud55c \ud0ed\uc744 \ud788\ud2b8\ub9f5\uc5d0 \ud45c\uc2dc\ud569\ub2c8\ub2e4.",
                unresponsive_click: "\ubc18\uc751\uc5c6\ub294 \ud0ed",
                unresponsive_click_count: "<b>\ubc18\uc751\uc5c6\ub294 \ud0ed</b>:<br/> \ud654\uba74\uc744 \ud130\uce58\ud588\uc744 \ub54c \uc561\uc158\uc774 \ubc1c\uc0dd\ud558\uc9c0 \uc54a\uc740 \ud0ed\uc744 \ud788\ud2b8\ub9f5\uc5d0 \ud45c\uc2dc\ud569\ub2c8\ub2e4."
            },
            head_app_views_tip: "\ud654\uba74\ubd84\uc11d \uae30\ub2a5\uc124\uba85",
            session_replays: {
                duration: "\uc0ac\uc6a9\uc790\uac00 \uc571\uc5d0 \uba38\ubb34\ub978 \uc2dc\uac04\uc744 \uae30\uc900\uc73c\ub85c \ud544\ud130\ub9c1\ud569\ub2c8\ub2e4.",
                seq_num: '<span class="tooltip-css">\uc0ac\uc6a9\uc790\uac00 \uc571\uc744 \uba87 \ubc88\uc9f8 \uc0ac\uc6a9\ud588\ub294\uc9c0\ub97c \uae30\uc900\uc73c\ub85c \ud544\ud130\ub9c1\ud569\ub2c8\ub2e4.</span>'
            },
            session_replays_tip: "\uc138\uc158\ub9ac\ud50c\ub808\uc774 \uae30\ub2a5\uc124\uba85",
            view_flows_tip: "\uacbd\ub85c\ubd84\uc11d \uae30\ub2a5\uc124\uba85"
        },
        heatmaps: {
            select_history: "\ub0a0\uc9dc \uc120\ud0dd"
        },
        not_integrated: {
            contents_html: "%{title} \ub370\uc774\ud130\uac00 \uc5c6\uc2b5\ub2c8\ub2e4. <br> UserHabit \uc5f0\ub3d9\ud558\uace0 \ub2e4\uc591\ud55c \uae30\ub2a5\uc744 \uc0ac\uc6a9\ud574 \ubcf4\uc138\uc694. <br> \uac01 \uba54\ub274\ubcc4\ub85c \uc544\ub798\uc758 DEMO \ud654\uba74\uc744 \ud1b5\ud574 \ubbf8\ub9ac \uae30\ub2a5\uc744 \uc0b4\ud3b4\ubcf4\uc2e4 \uc218 \uc788\uc2b5\ub2c8\ub2e4.",
            demo_image: "DEMO \uc774\ubbf8\uc9c0",
            try_integration: "\uc5f0\ub3d9\ud558\uae30"
        },
        notice_alert: {
            all: "\uc804\uccb4 \uacf5\uc9c0",
            contact: "\ubb38\uc758\ud558\uae30",
            content_tracking_modals: {
                copy_btn: "\uc774\ubca4\ud2b8 \ub85c\uadf8 \ubcf5\uc0ac",
                title: "\uc0ac\uc6a9\uc790 \uc815\uc758 \ucee8\ud150\uce20"
            },
            detail: "\ub0b4\uc6a9\ud655\uc778",
            dev_mode: "Test \ubaa8\ub4dc",
            diff_ver_content_html: "<li>Production \ubaa8\ub4dc\uc5d0 \ucd5c\uc2e0 \ubc84\uc804\uc774 \uc5c5\ub370\uc774\ud2b8 \ub418\uc5c8\uc73c\ub098 Test \ubaa8\ub4dc\uc758 \ubc84\uc804\uc774 \uc774\uc804 \ubc84\uc804\uc785\ub2c8\ub2e4.</li><br/><li>\ucd5c\uc2e0 \ubc84\uc804\uc5d0\uc11c \uc0c8\ub85c\uc6b4 \ud654\uba74\uc774 \ucd94\uac00\uac00 \ub418\uc5c8\uac70\ub098 \ubcc0\uacbd\ub41c \ud654\uba74\uc774 \uc788\uc744 \uacbd\uc6b0, Test \ubaa8\ub4dc\uc5d0\uc11c \uc2a4\ud06c\ub9b0\uc0f7\uc744 \uc218\uc9d1\ud558\uace0 \ucda9\ubd84\ud788 \ud14c\uc2a4\ud2b8\ub97c \uc9c4\ud589\ud558\uace0 Production \ubaa8\ub4dc\ub97c \uc0ac\uc6a9\ud558\uae30\ub97c \uad8c\uc7a5\ud569\ub2c8\ub2e4.</li><br/><li>Test \ubaa8\ub4dc\uc5d0\uc11c \ub370\uc774\ud130\ub97c \uc218\uc9d1\ud558\uc9c0 \uc54a\uace0 Production \ubaa8\ub4dc\ub85c \ub118\uc5b4\uac14\uc744 \uacbd\uc6b0, \uc2a4\ud06c\ub9b0\uc0f7\uc774 \uc218\uc9d1\ub418\uc9c0 \uc54a\uc544 \uc815\ud655\ud55c \ubd84\uc11d\uc774 \uc5b4\ub824\uc6b8 \uc218 \uc788\uc2b5\ub2c8\ub2e4.</li><br/><li>\uc2a4\ud06c\ub9b0\uc0f7 \uc218\uc9d1\uc740 Test \ubaa8\ub4dc\uc5d0\uc11c\ub9cc \uac00\ub2a5\ud558\uba70 \uc218\uc9d1\ub41c \ud654\uba74\uc740 Production \ubaa8\ub4dc\uc5d0\uc11c\ub3c4 \ud655\uc778\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.</li>",
            diff_ver_title: "Test \ubaa8\ub4dc\uc640 Production \ubaa8\ub4dc\uc758 \uc571 \ubc84\uc804\uc774 \ub2e4\ub985\ub2c8\ub2e4.",
            enterprise_done_content_html: "\uc2a4\ud06c\ub9b0\ubdf0 \uc0ac\uc6a9\ub7c9\uc744 \ubaa8\ub450 \uc18c\uc9c4\ud588\uc2b5\ub2c8\ub2e4. \uc790\uc138\ud55c \ub0b4\uc6a9\uc740 070-8230-3390\uc73c\ub85c \ubb38\uc758 \ubd80\ud0c1\ub4dc\ub9bd\ub2c8\ub2e4 <br/> - \uc5c5\ubb34\uc2dc\uac04 10:00AM ~ 07:00PM",
            enterprise_done_title: "\uc5d4\ud130\ud504\ub77c\uc774\uc988 \uc0ac\uc6a9\ub7c9\uc744 \ucd08\uacfc\ud588\uc2b5\ub2c8\ub2e4!",
            free_limit_almost_content: "\uacc4\uc18d \ub370\uc774\ud130 \ubd84\uc11d\uc744 \uc9c4\ud589\ud558\uc2dc\ub824\uba74 \ud50c\ub79c\uc744 \uc5c5\uadf8\ub808\uc774\ub4dc \ud574\uc8fc\uc138\uc694. \ubb38\uc758\ub294 help@userhabit.io\ub85c \ubd80\ud0c1\ud569\ub2c8\ub2e4.",
            free_limit_almost_title: "\uace7 \ubb34\ub8cc \uccb4\ud5d8\uae30\uac04\uc774 \ub9cc\ub8cc\ub429\ub2c8\ub2e4.",
            free_limit_done_content: "\uacc4\uc18d \ub370\uc774\ud130 \ubd84\uc11d\uc744 \uc9c4\ud589\ud558\uc2dc\ub824\uba74 \ud50c\ub79c\uc744 \uc5c5\uadf8\ub808\uc774\ub4dc \ud574\uc8fc\uc138\uc694. \ubb38\uc758\ub294 help@userhabit.io\ub85c \ubd80\ud0c1\ud569\ub2c8\ub2e4.",
            free_limit_done_title: "\ubb34\ub8cc \uccb4\ud5d8\uae30\uac04\uc774 \ub9cc\ub8cc\ub418\uc5c8\uc2b5\ub2c8\ub2e4. \ud50c\ub79c\uc744 \uc5c5\uadf8\ub808\uc774\ub4dc \ud574\uc8fc\uc138\uc694.",
            free_prd_almost_content: "50\ub9cc \uc2a4\ud06c\ub9b0\ubdf0\uae4c\uc9c0 \ubb34\ub8cc\ub85c \uc81c\uacf5\ub429\ub2c8\ub2e4. \uacc4\uc18d \ub370\uc774\ud130\ub97c \ud655\uc778\ud558\ub824\uba74 \uc720\ub8cc\ud50c\ub79c\uc744 \uc2e0\uccad\ud574\uc8fc\uc138\uc694.",
            free_prd_almost_title: "\ubb34\ub8cc\uc0ac\uc6a9\ub7c9 \ud55c\ub3c4\uc5d0 \uace7 \ub3c4\ub2ec\ud569\ub2c8\ub2e4!",
            free_prd_done_content: "50\ub9cc \uc2a4\ud06c\ub9b0\ubdf0\uae4c\uc9c0 \ubb34\ub8cc\ub85c \uc81c\uacf5\ub429\ub2c8\ub2e4. \uacc4\uc18d\ud574\uc11c \ub370\uc774\ud130\ub97c \ud655\uc778\ud558\ub824\uba74 \uc720\ub8cc\ud50c\ub79c\uc744 \uc2e0\uccad\ud574\uc8fc\uc138\uc694.",
            free_prd_done_title: "\ubb34\ub8cc\uc0ac\uc6a9\ub7c9\uc744 \ubaa8\ub450 \uc18c\uc9c4\ud588\uc2b5\ub2c8\ub2e4!",
            history: "\uacf5\uc9c0 \ud788\uc2a4\ud1a0\ub9ac",
            ignore: "\uc77d\uc74c\uc73c\ub85c \ud45c\uc2dc",
            install: "\uc124\uce58\ud558\uae30",
            install_notice: "\uc124\uce58 \uacf5\uc9c0",
            no_dev_data_content_html: "<li>\uc571\uc744 \uc0dd\uc131\ud55c \ud6c4, Test \ubaa8\ub4dc\uc5d0\uc11c \uc2a4\ud06c\ub9b0\uc0f7\uc744 \uc218\uc9d1\ud558\uace0 \ud14c\uc2a4\ud2b8\ub97c \uc9c4\ud589\ud558\uae30\ub97c \uad8c\uc7a5\ud569\ub2c8\ub2e4.</li><br/><li>Test \ubaa8\ub4dc\uc5d0\uc11c \ub370\uc774\ud130\ub97c \uc218\uc9d1\ud558\uc9c0 \uc54a\uace0 Production \ubaa8\ub4dc\ub85c \ub118\uc5b4\uac14\uc744 \uacbd\uc6b0, \uc2a4\ud06c\ub9b0\uc0f7\uc774 \uc218\uc9d1\ub418\uc9c0 \uc54a\uc544 \uc815\ud655\ud55c \ubd84\uc11d\uc774 \uc5b4\ub824\uc6b8 \uc218 \uc788\uc2b5\ub2c8\ub2e4.</li><br/><li>\uc2a4\ud06c\ub9b0\uc0f7 \uc218\uc9d1\uc740 Test \ubaa8\ub4dc\uc5d0\uc11c\ub9cc \uac00\ub2a5\ud558\uba70 \uc218\uc9d1\ub41c \ud654\uba74\uc740 Production \ubaa8\ub4dc\uc5d0\uc11c\ub3c4 \ud655\uc778\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.</li>",
            no_dev_data_title: "Test \ubaa8\ub4dc\uc5d0 \ub370\uc774\ud130\uac00 \uc5c6\uc2b5\ub2c8\ub2e4.",
            no_have: "\uc0c8\ub85c\uc6b4 \uc54c\ub9bc\uc774 \uc5c6\uc2b5\ub2c8\ub2e4.",
            no_screenshot_content_html: "<li>Production \ubaa8\ub4dc \ubc84\uc804 %{version}\uc5d0 \ud574\ub2f9\ud558\ub294 \uc571\uc5d0 \uc2a4\ud06c\ub9b0\uc0f7\uc774 \uc218\uc9d1\ub418\uc9c0 \uc54a\uc740 \ud654\uba74\uc774 \uc788\uc2b5\ub2c8\ub2e4.</li><br/><li>\uc2a4\ud06c\ub9b0\uc0f7 \uc218\uc9d1\uc774 \ub418\uc9c0 \uc54a\uc740 \uacbd\uc6b0, \uc815\ud655\ud55c \ubd84\uc11d\uc774 \uc5b4\ub824\uc6b8 \uc218 \uc788\uc2b5\ub2c8\ub2e4.</li><br/><li>\uc2a4\ud06c\ub9b0\uc0f7 \uc218\uc9d1\uc740 Test \ubaa8\ub4dc\uc5d0\uc11c\ub9cc \uac00\ub2a5\ud558\uba70 \uc218\uc9d1\ub41c \ud654\uba74\uc740 Production \ubaa8\ub4dc\uc5d0\uc11c\ub3c4 \ud655\uc778\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.</li><br/><li>\uc2a4\ud06c\ub9b0\uc0f7 \uc218\uc9d1 \ud604\ud669 %{cnt}/%{total} ( %{percent}% )</li>",
            no_screenshot_title: "\uc2a4\ud06c\ub9b0\uc0f7\uc774 \uc218\uc9d1\ub418\uc9c0 \uc54a\uc740 \ud654\uba74\uc774 \uc788\uc2b5\ub2c8\ub2e4.",
            one_more_free_almost_content: "\ud604\uc7ac \uc774\uc6a9\uc911\uc778 \ud504\ub85c\ubaa8\uc158 \uae30\ud55c\uc774 %{expired_date} \uc790\ub85c \ub9cc\ub8cc\ub420 \uc608\uc815\uc785\ub2c8\ub2e4. \ud504\ub85c\ubaa8\uc158\uc774 \ub05d\ub098\uba74 \ubb34\ub8cc \ud50c\ub79c\uc73c\ub85c \uc790\ub3d9 \uc804\ud658\ub429\ub2c8\ub2e4.",
            one_more_free_almost_title: "\ud504\ub85c\ubaa8\uc158 \uc0ac\uc6a9\uae30\ud55c\uc774 \uace7 \ub9cc\ub8cc\ub429\ub2c8\ub2e4! (%{expired_date} \ub9cc\ub8cc \uc608\uc815)",
            one_more_free_done_content: "\ud604\uc7ac \uc774\uc6a9\uc911\uc778 \ud504\ub85c\ubaa8\uc158 \uc0ac\uc6a9\uae30\ud55c\uc774 \ub9cc\ub8cc\ub418\uc5c8\uc2b5\ub2c8\ub2e4. \ubb34\ub8cc \ud50c\ub79c\uc73c\ub85c \uc790\ub3d9 \uc804\ud658\ub429\ub2c8\ub2e4.",
            one_more_free_done_title: "\ud504\ub85c\ubaa8\uc158 \uc0ac\uc6a9\uae30\ud55c\uc774 \ub9cc\ub8cc\ub418\uc5c8\uc2b5\ub2c8\ub2e4.",
            plan_apply: "\uc720\ub8cc\ud50c\ub79c \uc2e0\uccad",
            prd_mode: "Production \ubaa8\ub4dc",
            pricing: "\uac00\uaca9\uc815\ucc45",
            read: "\uc77d\uc740 \uacf5\uc9c0",
            screenshot_doc: "\uc2a4\ud06c\ub9b0\uc0f7 \uc218\uc9d1 \ub3c4\uc6c0\ub9d0",
            screenshot_guide: "\uc2a4\ud06c\ub9b0\uc0f7 \uac00\uc774\ub4dc",
            screenshot_setting: "\uc2a4\ud06c\ub9b0\uc0f7 \uad00\ub9ac",
            start_pack_almost_content: "\ud604\uc7ac \uc774\uc6a9\uc911\uc778 Promotion \ud50c\ub79c\uc758 \uc0ac\uc6a9\uae30\ud55c\uc774 %{expired_date} \uc790\ub85c \ub9cc\ub8cc\ub420 \uc608\uc815\uc785\ub2c8\ub2e4. Promotion\uc774 \ub05d\ub098\uba74 Startup \ud50c\ub79c\uc73c\ub85c \uc790\ub3d9 \uc804\ud658\ub429\ub2c8\ub2e4.",
            start_pack_almost_title: "\uc720\ub8cc \ud50c\ub79c \uc0ac\uc6a9\uae30\ud55c\uc774 \uace7 \ub9cc\ub8cc\ub429\ub2c8\ub2e4! (%{expired_date} \ub9cc\ub8cc \uc608\uc815)",
            start_pack_done_content: "\ud604\uc7ac \uc774\uc6a9\uc911\uc778 Promotion \ud50c\ub79c\uc758 \uc0ac\uc6a9\uae30\ud55c\uc774 \ub9cc\ub8cc\ub418\uc5c8\uc2b5\ub2c8\ub2e4. Startup \ud50c\ub79c\uc73c\ub85c \uc720\uc800\ud574\ube57\uc744 \uacc4\uc18d \uc774\uc6a9\ud558\uc2e4 \uc218 \uc788\uc2b5\ub2c8\ub2e4.",
            start_pack_done_title: "\uc720\ub8cc \ud50c\ub79c \uc0ac\uc6a9\uae30\ud55c\uc774 \ub9cc\ub8cc\ub418\uc5c8\uc2b5\ub2c8\ub2e4.",
            start_up_almost_content: "Startup \ud50c\ub79c\uc758 \uacbd\uc6b0 2,000\ub9cc \uc2a4\ud06c\ub9b0\ubdf0\uae4c\uc9c0 \uc81c\uacf5\ub418\uba70, \ucd08\uacfc\uc2dc \ucd94\uac00\ub85c \uacfc\uae08\ub429\ub2c8\ub2e4. (\ucd08\uacfc \uc2dc\uc810\ubd80\ud130 20\ub9cc \uc2a4\ud06c\ub9b0\ubdf0\ub2f9 10,000\uc6d0\uc529 \ucd94\uac00 \uacfc\uae08\uc774 \ubc1c\uc0dd\ud569\ub2c8\ub2e4.)",
            start_up_almost_title: "\uc0ac\uc6a9\ub7c9 \ud55c\ub3c4\uc5d0 \uace7 \ub3c4\ub2ec\ud569\ub2c8\ub2e4!",
            start_up_done_content: "Startup \ud50c\ub79c\uc758 \uacbd\uc6b0 2,000\ub9cc \uc2a4\ud06c\ub9b0\ubdf0\uae4c\uc9c0 \uc81c\uacf5\ub418\uba70, \ucd08\uacfc\uc2dc \ucd94\uac00\ub85c \uacfc\uae08\ub429\ub2c8\ub2e4. (\ucd08\uacfc \uc2dc\uc810\ubd80\ud130 20\ub9cc \uc2a4\ud06c\ub9b0\ubdf0\ub2f9 10,000\uc6d0\uc529 \ucd94\uac00 \uacfc\uae08\uc774 \ubc1c\uc0dd\ud569\ub2c8\ub2e4.)",
            start_up_done_title: "\uc0ac\uc6a9\ub7c9\uc744 \ubaa8\ub450 \uc18c\uc9c4\ud588\uc2b5\ub2c8\ub2e4!",
            update: "\uc5c5\ub370\uc774\ud2b8",
            usage_notice: "\uc0ac\uc6a9\ub7c9 \uacf5\uc9c0"
        },
        payment: {
            app_name: "\uc571\uc774\ub984",
            applied: "\uc2e0\uccad\uc774 \uc811\uc218\ub418\uc5c8\uc2b5\ub2c8\ub2e4!",
            apply_date: "\uc2e0\uccad\uc77c",
            apply_promotion: "Promotion \uc2e0\uccad",
            change_plan: "\ud50c\ub79c\ubcc0\uacbd",
            changed: "\ud50c\ub79c\uc774 \ubcc0\uacbd\ub418\uc5c8\uc2b5\ub2c8\ub2e4!",
            do_change: "\ubcc0\uacbd\ud558\uae30",
            email: "\uc774\uba54\uc77c",
            enterprise: "\uc5d4\ud130\ud504\ub77c\uc774\uc988",
            estimated_payment: "\uc608\uc0c1 \uacb0\uc81c\uae08\uc561",
            extra_cost: "\uc0ac\uc6a9\ub7c9 \ucd08\uacfc\uae08\uc561",
            free_dev: "\ubb34\ub8cc",
            free_prd: "\ubb34\ub8cc",
            inquiry: "\ubb38\uc758",
            keep_use: "\uacc4\uc18d \uc0ac\uc6a9\ud560\uac8c\uc694",
            mail: "\uba54\uc77c\ubb38\uc758",
            manager: "\ub2f4\ub2f9\uc790 \uc720\uc120\ubb38\uc758",
            manager_name: "\ub2f4\ub2f9\uc790\uba85",
            monthly_estimated_payment: "\uc774\ubc88\ub2ec \uc608\uc0c1 \uacb0\uc81c\uae08\uc561",
            non_changed_log: "\ud50c\ub79c \ubcc0\uacbd \uc774\ub825\uc774 \uc5c6\uc2b5\ub2c8\ub2e4.",
            notice: {
                cancel: "\ubcc0\uacbd\uc0ac\ud56d\uc744 \ub2e4\uc2dc \ud655\uc778\ud558\uc2dc\uace0, \uc0ac\uc720\ub97c \uc120\ud0dd\ud574\uc8fc\uc2dc\uba74 \uc11c\ube44\uc2a4 \uc6b4\uc601\uc5d0 \ubc18\uc601\ud558\ub3c4\ub85d \ud558\uaca0\uc2b5\ub2c8\ub2e4.",
                free_prd_html: "<span>\ubb34\ub8cc \uc0ac\uc6a9\ub7c9\uc73c\ub85c \uacc4\uc18d \uc0ac\uc6a9\ud558\uc2e4 \uc218 \uc788\uc73c\uba70, \ucde8\uc18c\uc77c\uc790\uae4c\uc9c0\uc758 \uae08\uc561\uc740 \uc77c\ud560\uacc4\uc0b0\ub418\uc5b4 \uc694\uae08\uc774 \uccad\uad6c\ub429\ub2c8\ub2e4.</span> <span>\uad81\uae08\ud55c \uc810\uc740 \ubb38\uc758\ud574\uc8fc\uc2dc\uae30 \ubc14\ub78d\ub2c8\ub2e4.</span>",
                payment: "\uc544\ub798 \ub0b4\uc6a9\uc744 \uae30\uc785\ud574 \uc2e0\uccad\ud574\uc8fc\uc2dc\uba74 \ud655\uc778\ud558\ub294\ub300\ub85c \uac1c\ubcc4 \uc5f0\ub77d\uc774 \uac08 \uc608\uc815\uc785\ub2c8\ub2e4.",
                start_pack: "\uc785\uae08 \ud655\uc778\ud6c4 \uacb0\uc81c\uc77c\ubd80\ud130 \ud50c\ub79c\uc774 \uc801\uc6a9\ub418\uba70, \uc2a4\ud06c\ub9b0\ubdf0 \uc0ac\uc6a9\ub7c9\uc744 \uce74\uc6b4\ud2b8\ud569\ub2c8\ub2e4.",
                start_up_html: "<span>\uc801\uc6a9\ud558\uc2e0 \ud50c\ub79c\uc2dc\uc791\uc77c\ubd80\ud130 \ud50c\ub79c\uc774 \uc801\uc6a9\ub418\uba70, \uc2a4\ud06c\ub9b0\ubdf0 \uc0ac\uc6a9\ub7c9\uc744 \uce74\uc6b4\ud2b8\ud569\ub2c8\ub2e4.</span> <span>\ub9e4\uc6d4 1\uc77c \uc0ac\uc6a9\ub7c9\uc744 \uacb0\uc0b0\ud574 \uccad\uad6c\uae08\uc561\uc774 \uba54\uc77c\ub85c \ubc1c\ud589\ub429\ub2c8\ub2e4. \uc0ac\uc6a9\ub7c9 \ubc0f \uacfc\uae08\uc5d0 \uad00\ud55c \uc0c1\uc138\uc815\ubcf4\ub294 <strong>\uacc4\uc815 > \uacb0\uc81c\uc815\ubcf4</strong>\uc5d0\uc11c \ud655\uc778\ud558\uc2e4 \uc218 \uc788\uc2b5\ub2c8\ub2e4.</span>"
            },
            one_month_free: "\ud504\ub85c\ubaa8\uc158",
            payment_plan: "\uacfc\uae08\ud50c\ub79c",
            phone_num: "\uc804\ud654\ubc88\ud638",
            poc: "PoC",
            reason: {
                difficult: "\uc11c\ube44\uc2a4\uac00 \uc0ac\uc6a9\ud558\uae30 \uc5b4\ub824\uc6cc\uc11c",
                etc: "\uae30\ud0c0",
                expensive: "\uc694\uae08\uc774 \ub108\ubb34 \ube44\uc2f8\uc11c",
                not_good: "\uc11c\ube44\uc2a4\uac00 \ucda9\ubd84\ud788 \ub9cc\uc871\uc2a4\ub7fd\uc9c0 \uc54a\uc544\uc11c"
            },
            receive_date: "\uc811\uc218\uc77c",
            select_app: "\ud50c\ub79c\uc744 \uc801\uc6a9\ud560 \uc571\uc744 \uc120\ud0dd\ud574\uc8fc\uc138\uc694! (\ud50c\ub79c\uc740 \uc571 \ubcc4\ub85c \uc801\uc6a9\ub429\ub2c8\ub2e4.)",
            select_plan: {
                enterprise: "\uacfc\uae08 \ubc0f \uc0ac\uc6a9\ub7c9 \ud611\uc758",
                free_prd: "\uc6d4 50\ub9cc \uc2a4\ud06c\ub9b0\ubdf0",
                promo: "\uc120\uacb0\uc81c \ud504\ub85c\ubaa8\uc158",
                start_pack: "2\uac1c\uc6d4 9\ub9cc\uc6d0, \uc2a4\ud06c\ub9b0\ubdf0 \ubb34\uc81c\ud55c",
                start_up: "\uc6d4 10\ub9cc\uc6d0. 2,000\ub9cc \uc2a4\ud06c\ub9b0\ubdf0"
            },
            start_pack: "\uc2a4\ud0c0\ud130\ud329",
            start_up: "\uc2a4\ud0c0\ud2b8\uc5c5",
            sv_usage: "\uc2a4\ud06c\ub9b0\ubdf0",
            tel: "\uc804\ud654\ubb38\uc758",
            warning: {
                cancel_html: "\ubb34\ub8cc\ud50c\ub79c\uc73c\ub85c \uc11c\ube44\uc2a4\ub97c \uc774\uc6a9\ud558\uc2e4 \uacbd\uc6b0, \ub9e4\ub2ec 50\ub9cc \uc2a4\ud06c\ub9b0\ubdf0\uc758 \uc81c\ud55c\uc774 \uc788\uc73c\uba70 \uc81c\uacf5\ub41c \uc0ac\uc6a9\ub7c9\uc744 \ucd08\uacfc\ud558\uba74 \ub370\uc774\ud130\uac00</span><br/> <span>\uc0ad\uc81c\ub418\uc5b4 \uc815\ud655\ud55c \ubd84\uc11d\uc774 \uc5b4\ub824\uc6b8 \uc218 \uc788\uc73c\ub2c8 \uc2e0\uc911\ud788 \uc120\ud0dd\ud574\uc8fc\uc2dc\uae30 \ubc14\ub78d\ub2c8\ub2e4.",
                enterprise_html: "<span>\ube60\ub978 \uc2dc\uc77c\ub0b4\ub85c \uc5f0\ub77d \ub4dc\ub9ac\uaca0\uc2b5\ub2c8\ub2e4.</span> <span>\ub2e4\ub978 \uad81\uae08\ud55c \uc0ac\ud56d\uc774 \uc788\uc73c\uc2dc\uba74 \uba54\uc77c\uc774\ub098 \uc804\ud654 \ub610\ub294 \ubb38\uc758\ud558\uae30 \ubc84\ud2bc\uc744 \ud1b5\ud574 \uc5b8\uc81c\ub4e0 \uc5f0\ub77d \ubd80\ud0c1\ub4dc\ub9bd\ub2c8\ub2e4.</span>",
                start_pack: {
                    account: "\uc785\uae08\uc815\ubcf4: \uc6b0\ub9ac\uc740\ud589 1005-802-319981",
                    due_date: "\uacb0\uc81c\uae30\ud55c",
                    holder: "\uc608\uae08\uc8fc: \uc8fc\uc2dd\ud68c\uc0ac \uc564\ubc97",
                    inquiry: "\uace0\uac1d\ubb38\uc758",
                    payment_html: "\uacb0\uc81c\uae08\uc561: <b>99,000\uc6d0 (\ubd80\uac00\uc138 \ud3ec\ud568)</b>"
                },
                start_up: {
                    content_1: "\ucfe0\ud3f0 \uc801\uc6a9\uc744 \uc6d0\ud558\uc2dc\uba74 \uc544\ub798 'Promotion \uc2e0\uccad' \ubc84\ud2bc\uc744 \ud1b5\ud574 \uc2e0\uccad\ud574\uc8fc\uc138\uc694.",
                    content_2_html: "\ub098\uc911\uc5d0 \uc801\uc6a9\ud558\uc2dc\ub824\uba74 \uc720\ud6a8\uae30\uac04 \ub0b4\uc5d0 <strong>\uacc4\uc815 > \uacb0\uc81c\uc815\ubcf4</strong> \uc5d0\uc11c \uc2e0\uccad\ud558\uc2e4 \uc218 \uc788\uc2b5\ub2c8\ub2e4.",
                    title_html: "\uc9c0\uae08 2\uac1c\uc6d4\uac04 9\ub9cc\uc6d0\uc73c\ub85c \uc0ac\uc6a9\ub7c9 \uac71\uc815 \uc5c6\uc774 UserHabit\uc744 \ub9d8\uaecf \uc0ac\uc6a9\ud574\ubcfc \uc218 \uc788\ub294 <strong>Promotion</strong>\uc744 \uc2e0\uccad\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4!"
                }
            }
        },
        plan: {
            alert_title: "\uc548\ub0b4",
            already_applied: "\uc120\ud0dd\ud558\uc2e0 %{app_name} \uc571\uc740<br/> \uc774\ubbf8 %{plan} \ud50c\ub79c\uc744 \uc774\uc6a9\ud558\uace0 \uc788\uc2b5\ub2c8\ub2e4.",
            already_title: "\uc548\ub0b4",
            app_name: "\uc571 \uc774\ub984",
            apply: {
                expires: '2\uac1c\uc6d4 \uc2a4\ud0c0\ud130\ud329 \ud504\ub85c\ubaa8\uc158\uc774 \ub9cc\ub8cc\ub418\uc5b4 \uc2a4\ud0c0\ud2b8\uc5c5 \ud50c\ub79c\uc73c\ub85c \uc804\ud658\ub429\ub2c8\ub2e4.<br><br>\uccab \ub2ec\uc744 \uc81c\uc678\ud558\uace0, \uc6d4\uc815\uc561\uc73c\ub85c \ub9e4\uc6d4 1\uc77c \uc0ac\uc6a9\ub7c9\uc744 \uacb0\uc0b0\ud574 \uccad\uad6c\uae08\uc561\uc774 \uc694\uccad\ub429\ub2c8\ub2e4.<br>\uc0ac\uc6a9\ub7c9 \ubc0f \uacfc\uae08\uc5d0 \uad00\ud55c \uc0c1\uc138\uc815\ubcf4\ub294 <b>\uacc4\uc815 > \uacb0\uc81c\uc815\ubcf4</b> \uc5d0\uc11c \ud655\uc778\ud558\uc2e4 \uc218 \uc788\uc2b5\ub2c8\ub2e4.<div class="notification-box"><span class="sub">\uccab \ub2ec\uc758 \uacbd\uc6b0, \uc2e0\uccad\uc77c \uae30\uc900\uc73c\ub85c \uc6d4\ub9d0\uae4c\uc9c0\uc758 \uc0ac\uc6a9\ub7c9\uc744 <b class="b-tag-bold">\uc77c\ud560\uacc4\uc0b0</b>\ud558\uc5ec \uc694\uae08\uc774 \uccad\uad6c\ub429\ub2c8\ub2e4.</span></div>',
                poc: "\uacb0\uc81c\uc644\ub8cc\uc77c\ubd80\ud130 \ud50c\ub79c\uc774 \uc801\uc6a9\ub418\uba70 <br>\uc0ac\uc6a9\ub7c9 \ubc0f \uacfc\uae08\uc5d0 \uad00\ud55c \uc0c1\uc138\uc815\ubcf4\ub294 <b>\uacc4\uc815 > \uacb0\uc81c\uc815\ubcf4</b> \uc5d0\uc11c \ud655\uc778\ud558\uc2e4 \uc218 \uc788\uc2b5\ub2c8\ub2e4.<br><br> \ubb38\uc758: 070-8230-3390",
                start_pack: "\uacb0\uc81c\uae08\uc561\uc744 \uc785\uae08 \ud655\uc778 \ud6c4 \uacb0\uc81c\uc77c\ubd80\ud130 \ud50c\ub79c\uc774 \uc801\uc6a9\ub418\uba70<br/>2\uac1c\uc6d4 \uc0ac\uc6a9 \uc885\ub8cc \ud6c4, Startup \ud50c\ub79c\uc73c\ub85c \uc790\ub3d9 \uc804\ud658\ub429\ub2c8\ub2e4.<br/>\uc0ac\uc6a9\ub7c9 \ubc0f \uacfc\uae08\uc5d0 \uad00\ud55c \uc0c1\uc138\uc815\ubcf4\ub294 <b>\uacc4\uc815 > \uacb0\uc81c\uc815\ubcf4</b> \uc5d0\uc11c \ud655\uc778\ud558\uc2e4 \uc218 \uc788\uc2b5\ub2c8\ub2e4.",
                start_up: '\uc6d4\uc815\uc561\uc73c\ub85c \ub9e4\uc6d4 1\uc77c \uc0ac\uc6a9\ub7c9\uc744 \uacb0\uc0b0\ud574 \uccad\uad6c\uae08\uc561\uc774 \uc694\uccad\ub429\ub2c8\ub2e4.<br/>\uc0ac\uc6a9\ub7c9 \ubc0f \uacfc\uae08\uc5d0 \uad00\ud55c \uc0c1\uc138\uc815\ubcf4\ub294 <b>\uacc4\uc815 > \uacb0\uc81c\uc815\ubcf4</b> \uc5d0\uc11c \ud655\uc778\ud558\uc2e4 \uc218 \uc788\uc2b5\ub2c8\ub2e4.<br/><br/><div class="notification-box"><span class="sub">1. \uccab \ub2ec\uc758 \uacbd\uc6b0, \uc2e0\uccad\uc77c \uae30\uc900\uc73c\ub85c \uc6d4\ub9d0\uae4c\uc9c0\uc758 \uc0ac\uc6a9\ub7c9\uc744 <b class="b-tag-bold">\uc77c\ud560\uacc4\uc0b0</b>\ud558\uc5ec \uc694\uae08\uc774 \uccad\uad6c\ub429\ub2c8\ub2e4.</span><br><span class="sub">2. <b>30\uc778 \uc774\uc0c1</b>\uc778 \uacbd\uc6b0, <b>\uc0ac\uc804\ud1b5\ubcf4 \uc5c6\uc774 \ud50c\ub79c\uc774 \ud574\uc9c0</b>\ub420 \uc218 \uc788\uc2b5\ub2c8\ub2e4. </div>'
            },
            change_plan: "\ud50c\ub79c\ubcc0\uacbd",
            cost: "\uc608\uc0c1 \uc694\uae08",
            cost_info_html: "\ud604\uc7ac \uc0ac\uc6a9\ub7c9\uc744 \uae30\uc900\uc73c\ub85c Startup \ud50c\ub79c \uae30\uc900 \uc608\uc0c1\uc694\uae08\uc740 <b>\u20a9%{cost}</b>\uc785\ub2c8\ub2e4. (VAT \ubcc4\ub3c4)",
            current_period: "\ud604\uc7ac \uc0ac\uc6a9\uae30\uac04",
            current_plan: "\ud604\uc7ac \uc0ac\uc6a9 \ud50c\ub79c",
            current_usage: "\ud604\uc7ac \uc0ac\uc6a9\ub7c9",
            date: "%{date} \uc77c",
            default_usage: "\uae30\ubcf8 \uc81c\uacf5\ub7c9",
            enterprise_cost: "\uacc4\uc57d\uae08\uc561 \ucc38\uace0",
            enterprise_descript: "\uc720\uc800\ud574\ube57\uc73c\ub85c \uacac\uc801 \ubc0f \ubb38\uc758 \uba54\uc77c\uc774 \ubc1c\uc1a1\ub418\uc5c8\uc2b5\ub2c8\ub2e4.<br/>\ud655\uc778 \ud6c4 \uc5f0\ub77d\ub4dc\ub9ac\ub3c4\ub85d \ud558\uaca0\uc2b5\ub2c8\ub2e4.",
            enterprise_title: "\uacac\uc801 \ubc0f \ubb38\uc758",
            free_remain_date: "\ubb34\ub8cc \uc794\uc5ec\uae30\uac04",
            name: {
                enterprise: "Enterprise",
                expires: "\uc2a4\ud0c0\ud2b8\uc5c5",
                free_dev: "Free",
                free_prd: "\ubb34\ub8cc \uccb4\ud5d8",
                free_prd_20day: "20\uc77c \ubb34\ub8cc \uccb4\ud5d8",
                none: "\uc5c6\uc74c",
                one_month_free: "Promotion",
                poc: "PoC",
                start_pack: "\uc2a4\ud0c0\ud130\ud329",
                start_up: "\uc2a4\ud0c0\ud2b8\uc5c5"
            },
            no_plan: "\uc0ac\uc6a9\uc911\uc778 \ud50c\ub79c \uc5c6\uc74c",
            no_plan_sub_1: "\uc0ac\uc6a9\uc911\uc778 \ud50c\ub79c\uc774 \uc5c6\uc2b5\ub2c8\ub2e4.",
            no_plan_sub_2: "\ud50c\ub79c\uc744 \uad6c\ub9e4\ud574 \uc8fc\uc138\uc694",
            over_cost_html: "\ucd08\uacfc \uc0ac\uc6a9\ub7c9<br/><b>%{cost} \uc2a4\ud06c\ub9b0\ubdf0</b>",
            over_usage: "\ucd08\uacfc \uc0ac\uc6a9\ub7c9",
            plan_name: "\uc0ac\uc6a9\ud50c\ub79c",
            plan_upgrade: {
                enterprise: "\uc0ac\uc6a9\ub7c9 \ud655\uc778",
                free_dev: "\ud50c\ub79c \uc5c5\uadf8\ub808\uc774\ub4dc",
                free_prd: "\ud50c\ub79c \uc5c5\uadf8\ub808\uc774\ub4dc",
                one_month_free: "\ud50c\ub79c \uc5c5\uadf8\ub808\uc774\ub4dc",
                poc: "\uc0ac\uc6a9\ub7c9 \ud655\uc778",
                start_pack: "\ud50c\ub79c \uc5c5\uadf8\ub808\uc774\ub4dc",
                start_up: "\uc0ac\uc6a9\ub7c9 \ud655\uc778"
            },
            plan_usage_info: "\uc0ac\uc6a9\ub7c9 \ud655\uc778",
            remain: "\uc794\uc5ec",
            remain_date: "\uc794\uc5ec\uae30\uac04",
            remain_sv: "%{sv} (\uc794\uc5ec)",
            select_plan: "\ud50c\ub79c \uc120\ud0dd",
            select_plan_option: "\ud50c\ub79c\uc744 \uc801\uc6a9\ud560 \uc571\uc744 \uc120\ud0dd\ud574\uc8fc\uc138\uc694.",
            select_terminate: "\ud574\uc9c0\ud558\uace0\uc790 \ud558\ub294 \uc571\uc744 \uc120\ud0dd\ud558\uc138\uc694.",
            send_terminate_mail: "\ud50c\ub79c \ud574\uc9c0 \uba54\uc77c \ubcf4\ub0b4\uae30",
            start_pack_descript: 'Starter Pack \ud50c\ub79c \uc2e0\uccad\uc774 \uc811\uc218\ub418\uc5c8\uc2b5\ub2c8\ub2e4. <br>\ub4f1\ub85d\ud558\uc2e0 \uba54\uc77c(<span class="email-ipc">%{user_email}</span>)\ub85c \uc548\ub0b4 \uba54\uc77c\uc744 \ubc1c\uc1a1\ud574\ub4dc\ub838\uc2b5\ub2c8\ub2e4.<br>\uc120\uacb0\uc81c \uc774\ud6c4, Starter Pack \ud50c\ub79c\uc744 \uc0ac\uc6a9\ud558\uc2dc \uc218 \uc788\uc2b5\ub2c8\ub2e4.',
            start_pack_title: "\ud50c\ub79c \uc2e0\uccad \uc644\ub8cc",
            start_up_default_html: "Startup \ud50c\ub79c \uae30\ubcf8 \uc81c\uacf5\ub7c9<br/>(2,000\ub9cc \uc2a4\ud06c\ub9b0\ubdf0)",
            start_up_descript: 'Startup \ud50c\ub79c\uc774 \uc2e0\uccad\ub418\uc5c8\uc2b5\ub2c8\ub2e4.<br>\ub4f1\ub85d\ud558\uc2e0 \uba54\uc77c(<span class="email-ipc">%{user_email}</span>)\ub85c \uc2e0\uccad\ud558\uc2e0 \ud50c\ub79c\uad00\ub828 \uc815\ubcf4\ub97c \ubc1c\uc1a1\ud574 \ub4dc\ub9ac\uc624\ub2c8<br>\ubb38\uc758\uc0ac\ud56d\uc774 \uc788\ub294 \uacbd\uc6b0, \uc5f0\ub77d\uc8fc\uc2dc\uae30 \ubc14\ub78d\ub2c8\ub2e4.',
            start_up_descript_already: "%{app_name} \uc571\uc740<br/> \uc774\ubbf8 Starter Pack \ud50c\ub79c\uc744 \uc774\uc6a9\ud558\uace0 \uc788\uc5b4 Startup \ud50c\ub79c \uc2e0\uccad\uc774 \ubd88\uac00\ud558\uba70,<br>2\uac1c\uc6d4 \uc774\ud6c4\uc5d0 \uc790\ub3d9\uc73c\ub85c Startup \ud50c\ub79c\uc73c\ub85c \uc804\ud658\ub429\ub2c8\ub2e4.",
            start_up_title: "\ud50c\ub79c \uc2e0\uccad \uc644\ub8cc",
            start_up_title_already: "Starter Pack \ud50c\ub79c",
            sv: "\uc2a4\ud06c\ub9b0\ubdf0",
            sv_usage: "\uc2a4\ud06c\ub9b0\ubdf0 \uc794\uc5ec\ub7c9",
            terminate: "\ud50c\ub79c \ud574\uc9c0",
            terminate_notice_1: "\ud50c\ub79c\uc744 \ud574\uc9c0\ud558\uba74 \ub370\uc774\ud130 \uc218\uc9d1 \ubc0f \uc870\ud68c\ub97c \uc81c\ud55c\ud569\ub2c8\ub2e4.",
            terminate_notice_2: "\uc815\ub9d0\ub85c \ud574\uc9c0\ud558\uaca0\uc2b5\ub2c8\uae4c?",
            terminate_reason: "\ucde8\uc18c \uc0ac\uc720",
            terminate_reason_1: "\uc11c\ube44\uc2a4\ub97c \uc0ac\uc6a9\ud558\uae30 \uc5b4\ub824\uc6cc\uc11c",
            terminate_reason_2: "\uc11c\ube44\uc2a4\uac00 \ucda9\ubd84\ud788 \ub9cc\uc871\uc2a4\ub7fd\uc9c0 \uc54a\uc544\uc11c",
            terminate_reason_3: "\uc694\uae08\uc774 \ub108\ubb34 \ube44\uc2f8\uc11c",
            terminate_reason_4: "\uae30\ud0c0",
            test_usage: "\uc6d4 \ud14c\uc2a4\ud2b8 \uc0ac\uc6a9\ub7c9",
            unlimit: "\ubb34\uc81c\ud55c",
            vat_info: "\ud50c\ub79c\uc740 \uc571 \ubcc4\ub85c \uac01\uac01 \uc801\uc6a9\ub418\uba70 VAT\ub294 \ubcc4\ub3c4\uc785\ub2c8\ub2e4."
        },
        platforms: {
            android: "\uc548\ub4dc\ub85c\uc774\ub4dc",
            ios: "iOS",
            phonegap: "\ud3f0\uac2d",
            unity: "\uc720\ub2c8\ud2f0"
        },
        rate_of_changes: {
            fav_filter: "\uc990\uaca8\ucc3e\uae30 \ud654\uba74\ub9cc \ubcf4\uae30",
            indicators: {
                actions: "\uc2a4\ud06c\ub9b0\ubdf0\ub2f9 \uc561\uc158",
                crashed: "\ud06c\ub798\uc2dc",
                exited: "\uc571 \uc885\ub8cc",
                screen_views: "\uc2a4\ud06c\ub9b0\ubdf0",
                sessions: "\uc138\uc158",
                taps_un: "\ubb34\ubc18\uc751 \ud0ed \ube44\uc728",
                title: "\ud654\uba74\uc9c0\ud45c",
                total_duration: "\uc2a4\ud06c\ub9b0\ubdf0\ub2f9 \uccb4\ub958\uc2dc\uac04",
                unique_users: "\uc77c\ud3c9\uade0 \uc0ac\uc6a9\uc790"
            },
            list: {
                last_week: "\ube44\uad50\uc8fc\uac04(A)",
                rate: "A\ub300\ube44 \uc99d\uac10\ub960",
                this_week: "\uc120\ud0dd\uc8fc\uac04(B)",
                title: "\uc8fc\uac04 \uc99d\uac10\ub960 \ube44\uad50"
            },
            page_info_html: "\ucd1d <b>%{total}</b>\uac1c\uc911 <b>%{from}</b> - <b>%{to}</b>\uac1c",
            per_page: "\uac1c\uc758 \ud654\uba74 \ubcf4\uae30",
            rate_tooltip_html: "\uc99d\uac10\ub960 \uacf5\uc2dd: <b>(B-A)/A*100</b><br/>*A: \uc120\ud0dd\ud55c \uc8fc \uc9c1\uc804 \uc8fc\uac04\uc758 \uc9c0\ud45c\uac12<br/>*B: \uc120\ud0dd\ud55c \uc8fc\uac04\uc758 \uc9c0\ud45c\uac12",
            session_filter: "\uc138\uc158 \ud544\ud130",
            week_tooltip: "%{year}\ub144 %{month}\uc6d4 %{date}\uc77c"
        },
        screen_analysis: {
            all_screen: "\uc804\uccb4\ud654\uba74",
            heatmaps: "\ud788\ud2b8\ub9f5",
            screen_analysis: "\ud654\uba74\ubd84\uc11d",
            screen_ranking: "\ud654\uba74\ub7ad\ud0b9"
        },
        screen_shot: {
            change_may_take_some_time_html: "*\ubcc0\uacbd\ub41c \uc124\uc815\uc774 \uc801\uc6a9\ub418\ub824\uba74 \uc57d 1\ubd84 \uc815\ub3c4 \uc18c\uc694\ub429\ub2c8\ub2e4.",
            collect_date: "\uc218\uc9d1\uc77c",
            collect_help_modal: {
                auto: {
                    box: {
                        content_1: "16:8\uc774\uc0c1 16:10 \uc774\ud558 \ud574\uc0c1\ub3c4 \ubc94\uc704 \ub0b4",
                        content_2: "\ub514\ud3f4\ud2b8\ub294 \ud574\ub2f9 \ud654\uba74\uc5d0 \uc9c4\uc785\ud55c \ud6c4 1\ucd08 \ub4a4 \uc218\uc9d1",
                        content_3: "\uc218\uc9d1\uc2dc\uc810\uc740 \ucf54\ub4dc\uc0c1\uc5d0\uc11c \ubcc0\uacbd \uac00\ub2a5",
                        title_1: "\uc218\uc9d1 \ud574\uc0c1\ub3c4",
                        title_2: "\uc218\uc9d1 \uc2dc\uc810"
                    },
                    content: "\uc720\uc800\ud574\ube57\uc758 Test \ubaa8\ub4dc SDK \uc124\uce58 \ud6c4 \uc571\uc744 \uc2e4\ud589\ud574 \ud654\uba74\uc5d0 \uc9d1\uc785\ud558\uba74 \ud654\uba74\uc744 \uc790\ub3d9\uc73c\ub85c \uc218\uc9d1\ud569\ub2c8\ub2e4.",
                    content_ios_1: "Test SDK\ub97c \uc124\uce58\ud55c \uc571\uc744 \uc2e4\ud589\ud558\uc5ec \uc218\uc9d1\ud558\uace0\uc790 \ud558\ub294 \ud654\uba74\uc744 \ubc29\ubb38\ud558\uba74 \uc790\ub3d9\uc73c\ub85c \uc218\uc9d1\ud569\ub2c8\ub2e4.",
                    content_ios_2: "\ubc84\uc804\ub2f9 \ud55c \ud654\uba74\ub9c8\ub2e4 \ud558\ub098\uc758 \uc2a4\ud06c\ub9b0\uc0f7\uc744 \uc218\uc9d1\ud569\ub2c8\ub2e4.",
                    title: "\uc790\ub3d9 \uc2a4\ud06c\ub9b0\uc0f7 \uc218\uc9d1 \ubaa8\ub4dc"
                },
                manual: {
                    content_html: "<span>\uc790\ub3d9 \uc2a4\ud06c\ub9b0\uc0f7 \uc218\uc9d1 \ubaa8\ub4dc\ub85c \ud654\uba74 \uc2a4\ud06c\ub9b0\uc0f7\uc758 \ucde8\ub4dd \ud0c0\uc774\ubc0d\uc774 \ub9de\uc9c0 \uc54a\uc544 \uc2a4\ud06c\ub9b0\uc0f7\uc774 \uc798\ubabb \uc218\uc9d1\ub41c \uacbd\uc6b0</span>, \uc218\ub3d9 \uc2a4\ud06c\ub9b0\uc0f7 \uc218\uc9d1 \ubaa8\ub4dc\ub97c \uc2e4\ud589\ud558\uc5ec \uc815\ud655\ud55c \uc2a4\ud06c\ub9b0\uc0f7 \uc218\uc9d1\uc744 \ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.",
                    guide_btn: "\uac00\uc774\ub4dc \ub9c1\ud06c",
                    guide_title: "\uc218\ub3d9 \uc2a4\ud06c\ub9b0\uc0f7 \uc218\uc9d1 \ubaa8\ub4dc \ud65c\uc131\ud654 \ubc29\ubc95 (\uc548\ub4dc\ub85c\uc774\ub4dc \uae30\uc900)",
                    title: "\uc218\ub3d9 \uc2a4\ud06c\ub9b0\uc0f7 \uc218\uc9d1 \ubaa8\ub4dc"
                },
                retake: {
                    box: {
                        content_1: "\uc2a4\ud06c\ub9b0\uc0f7 \uad00\ub9ac \ud398\uc774\uc9c0\uc5d0\uc11c \uc7ac\uc218\uc9d1\ud558\uace0\uc790 \ud558\ub294 \ud654\uba74\uc744 \ud074\ub9ad\ud558\uc5ec \uc2a4\ud06c\ub9b0\uc0f7\uc744 \uc0ad\uc81c\ud55c\ub2e4.",
                        content_2: "\uac1c\ubc1c\uc790 SDK\ub97c \uc124\uce58\ud55c \uc571\uc744 \uc2e4\ud589\ud558\uc5ec \uc218\uc9d1\ud558\uace0\uc790 \ud558\ub294 \ud654\uba74\uc744 \ubc29\ubb38\ud558\uc5ec \uc790\ub3d9 \uc218\uc9d1\ud55c\ub2e4.",
                        title: "\ud574\uacb0 \ubc29\ubc95"
                    },
                    content: "\uc6d0\uc778 : \ub85c\ub529 \uc2dc\uac04 \ub4f1\uc73c\ub85c \uc2a4\ud06c\ub9b0\uc0f7\uc758 \ucde8\ub4dd \ud0c0\uc774\ubc0d\uc774 \ub9de\uc9c0 \uc54a\ub294 \uacbd\uc6b0",
                    title: "\uc6d0\uce58 \uc54a\ub294 \ud654\uba74\uc774 \uc218\uc9d1\ub41c \uacbd\uc6b0"
                },
                title: "\uc2a4\ud06c\ub9b0\uc0f7 \uc218\uc9d1 \ub3c4\uc6c0\ub9d0"
            },
            collect_screenshot: "\uc2a4\ud06c\ub9b0\uc0f7 \uc218\uc9d1",
            current: "\uc2a4\ud06c\ub9b0\uc0f7 \uc218\uc9d1 \ud604\ud669",
            delete_screenshot: "\uc2a4\ud06c\ub9b0\uc0f7 \uc0ad\uc81c\ud558\uae30",
            edit_alias: "\uc774\ub984 \uc218\uc815\ud558\uae30",
            filter: {
                favorite: '<i class="glyphicon glyphicon-star"></i>\ud45c\uc2dc\ud55c \ud654\uba74',
                landscape: "\uac00\ub85c\ud654\uba74",
                landscape_collected: "\uc2a4\ud06c\ub9b0\uc0f7 \uc788\ub294\ud654\uba74",
                landscape_uncollected: "\uc2a4\ud06c\ub9b0\uc0f7 \uc788\ub294\ud654\uba74",
                "new": '<span class="new-oval">N</span>24\uc2dc\uac04 \uc774\ub0b4 \uc0c8\ub85c \ucd94\uac00\ub41c \ud654\uba74',
                screen: "\uc77c\ubc18\ud654\uba74",
                screen_collected: "\uc2a4\ud06c\ub9b0\uc0f7 \uc788\ub294 \ud654\uba74",
                screen_uncollected: "\uc2a4\ud06c\ub9b0\uc0f7 \uc5c6\ub294 \ud654\uba74",
                scroll: "\uc2a4\ud06c\ub864\ud654\uba74",
                scroll_collected: "\uc2a4\ud06c\ub9b0\uc0f7 \uc788\ub294 \ud654\uba74",
                scroll_uncollected: "\uc2a4\ud06c\ub9b0\uc0f7 \uc5c6\ub294 \ud654\uba74",
                unchanged: '<i class="glyphicon glyphicon-pencil"></i>\ubcc4\uce6d \uc5c6\ub294 \ud654\uba74'
            },
            guide_info: "\uc2a4\ud06c\ub9b0\uc0f7 \uc218\uc9d1 \ubc29\ubc95\uc740 \uac00\uc774\ub4dc \ud398\uc774\uc9c0\uc5d0\uc11c \ud655\uc778\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.",
            help_have_screenshot: "\ud654\uba74\uc774 \uc874\uc7ac\ud558\uba70 \uc2a4\ud06c\ub9b0\uc0f7\uc774 \uc218\uc9d1\ub418\uc5c8\uc2b5\ub2c8\ub2e4.",
            help_html: '<span class="check-screen blue">\ud654\uba74</span> <b>\uc744 \ud074\ub9ad\ud558\uba74 \uc218\uc9d1\ub41c \uc2a4\ud06c\ub9b0\uc0f7\uc744 \ud655\uc778 \ubc0f \uc0ad\uc81c\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.</b>',
            help_new: "\uc0c8\ub85c \ucd94\uac00\ub41c \uc2a4\ud06c\ub9b0\uc0f7 : \uc2a4\ud06c\ub9b0\uc0f7\uc744 \uc218\uc9d1\ud55c \ud6c4, 24\uc2dc\uac04 \ub3d9\uc548 \ud45c\uc2dc\ub429\ub2c8\ub2e4.",
            help_no_screenshot: "\ud654\uba74\uc774 \uc874\uc7ac\ud558\uc9c0\ub9cc \uc2a4\ud06c\ub9b0\uc0f7\uc774 \uc218\uc9d1\ub418\uc9c0 \uc54a\uc558\uc2b5\ub2c8\ub2e4.",
            img_capture_content_off_html: "<b>\uc790\ub3d9\uc218\uc9d1 \ubaa8\ub4dc OFF</b><br/>\ud654\uba74 \uc2a4\ud06c\ub9b0\uc0f7\uc744 \uc790\ub3d9\uc73c\ub85c \uc218\uc9d1\ud558\ub294 \ud65c\ub3d9\uc744 \uc911\ub2e8\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.",
            img_capture_content_on_html: "<b>\uc790\ub3d9\uc218\uc9d1 \ubaa8\ub4dc ON</b><br/>\uc720\uc800\ud574\ube57\uc758 Test \ubaa8\ub4dc SDK \uc124\uce58 \ud6c4, \uc571\uc744 \uc2e4\ud589\ud574 \ud654\uba74\uc5d0 \uc9c4\uc785\ud558\uba74 \ud654\uba74\uc744 \uc790\ub3d9\uc73c\ub85c \uc218\uc9d1\ud569\ub2c8\ub2e4.",
            img_capture_title: "\uc790\ub3d9\uc218\uc9d1 \ubaa8\ub4dc\ub97c \uc815\ub9d0\ub85c \ubcc0\uacbd\ud558\uc2dc\uaca0\uc2b5\ub2c8\uae4c?",
            landscape: "\uac00\ub85c\ud654\uba74 \uc2a4\ud06c\ub9b0\uc0f7 \uc218\uc9d1",
            landscape_screen: "\uac00\ub85c",
            mode: "\uc790\ub3d9 \uc2a4\ud06c\ub9b0\uc0f7 \uc218\uc9d1 \ubaa8\ub4dc",
            need_collect: "\ud654\uba74\ub9cc \ubcf4\uae30",
            "new": "\uc0c8\ub85c \ucd94\uac00\ub41c \uc2a4\ud06c\ub9b0\uc0f7",
            none_list: "\ud574\ub2f9\ud558\ub294 \ud654\uba74\uc774 \uc5c6\uc2b5\ub2c8\ub2e4.",
            normal: "\uc138\ub85c\ud654\uba74 \uc2a4\ud06c\ub9b0\uc0f7 \uc218\uc9d1",
            normal_screen: "\uc77c\ubc18",
            o: "\ud654\uba74 \uc788\uc74c",
            page_info_html: "<b>%{total}</b>\uac1c\uc911 <b>%{first}</b> - <b>%{end}</b>",
            per: "\uac1c\uc529 \ubcf4\uae30",
            recent_ver: "\ucd5c\uc2e0 \ubc84\uc804",
            screen: "\ud654\uba74",
            screen_key: "\uae30\uc874 \ud654\uba74\uc774\ub984",
            screen_name: "\ubcc4\uce6d",
            scroll: "\uc2a4\ud06c\ub864\ud654\uba74 \uc2a4\ud06c\ub9b0\uc0f7 \uc218\uc9d1",
            scroll_screen: "\uc2a4\ud06c\ub864",
            select_version: "\ubc84\uc804\uc744 \uc120\ud0dd\ud574\uc8fc\uc138\uc694",
            ver: "\ubc84\uc804",
            x: "\ud654\uba74 \uc5c6\uc74c"
        },
        session_replays: {
            action_count: "\uc561\uc158\uc218",
            activity_end_type: "\ud648 \ubc84\ud2bc",
            activity_start_type: "\ud654\uba74 \uc2dc\uc791",
            alert: "\uae30\uac04 \ud544\ud130\uc5d0 \ud574\ub2f9\ud558\ub294 \uc138\uc158 \ub9ac\uc2a4\ud2b8\ub9cc\uc744 \ud45c\uc2dc\ud569\ub2c8\ub2e4. \ud55c \uc0ac\uc6a9\uc790\uc758 \ubaa8\ub4e0 \uc138\uc158 \ub9ac\uc2a4\ud2b8\ub97c \ud655\uc778\ud558\uae30 \uc704\ud574\uc11c\ub294 \uae30\uac04 \ud544\ud130\ub97c \uc870\uc815\ud558\uc5ec \uc0ac\uc6a9\ud558\uc138\uc694.",
            all_sessions: "\uc138\uc158 \uc804\uccb4",
            all_sessions_of_same_user: "\uc544\ub798 \ud14c\uc774\ube14\uc740 \ud544\ud130\uc640 \uc0c1\uad00\uc5c6\uc774 \uc804\uccb4 \uc138\uc158\uc744 \ud45c\uc2dc\ud569\ub2c8\ub2e4.",
            app_did_become_active: "\uba40\ud2f0\ud0dc\uc2a4\ud0b9 \ubaa8\ub4dc In",
            app_will_resign_active: "\uba40\ud2f0\ud0dc\uc2a4\ud0b9 \ubaa8\ub4dc Out",
            back_button_type: "\ub4a4\ub85c\uac00\uae30 \ubc84\ud2bc",
            by_end_screen: "\uc885\ub8cc \ud654\uba74",
            by_screen_name: "\ud2b9\uc815 \ud654\uba74",
            by_start_screen: "\uc2dc\uc791 \ud654\uba74",
            crash: "\ud06c\ub798\uc2dc",
            crash_false: "\ud06c\ub798\uc2dc \uc5c6\uc74c",
            crash_msg: "\ud06c\ub798\uc2dc \uba54\uc2dc\uc9c0",
            crash_not_supported: "SDK 1.0 \uc774\uc804 \ubc84\uc83c\uc5d0\uc11c\ub294 \uc9c0\uc6d0\ub418\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4.",
            crash_true: "\ud06c\ub798\uc2dc \uc138\uc158",
            crash_type: "\ud06c\ub798\uc2dc \uc885\ub958",
            crashed_type: "\ud06c\ub798\uc2dc",
            csv_btn: "CSV \ub2e4\uc6b4",
            detail_log: "\uc0c1\uc138 \ub85c\uadf8",
            device_model_mk: "\ubaa8\ub378\uba85/\uc81c\ud488\uba85",
            device_name: "\ub514\ubc14\uc774\uc2a4 \uc774\ub984",
            double_tap_type: "\ub354\ube14 \ud0ed",
            download_csv_title: "CSV \ub2e4\uc6b4\ub85c\ub4dc (\ucd5c\ub300 5,000\uac74)",
            duration: "\uccb4\ub958\uc2dc\uac04",
            elapsed_time: "\uacbd\uacfc \uc2dc\uac04",
            error_type: "\uc5d0\ub7ec \uc885\ub958",
            event_log: "\uc774\ubca4\ud2b8 \ub85c\uadf8",
            fav_false: "\uc990\uaca8\ucc3e\uae30 Off",
            fav_true: "\uc990\uaca8\ucc3e\uae30 On",
            filter_screen: "\uc0ac\uc6a9 \ud654\uba74 \ud544\ud130",
            filter_userenv: "\uc0ac\uc6a9\uc790 \ud658\uacbd",
            filter_userexp: "\uc0ac\uc6a9\uc790 \uacbd\ud5d8",
            go_previous: "\uc774\uc804 \ud654\uba74",
            in_action: "\ud654\uba74 \ub0b4 \uc561\uc158",
            is_charging: "\ucda9\uc804\uc5ec\ubd80",
            is_rooted: "\ud0c8\uc625/\ub8e8\ud305 \uc5ec\ubd80",
            key_control_guide_2_html: "\ubc29\ud5a5\ud0a4\ub85c \uad6c\uac04\uc774\ub3d9",
            key_control_guide_3_html: "\uc2a4\ud398\uc774\uc2a4\ud0a4\ub85c \uc7ac\uc0dd/\uba48\ucda4",
            key_control_guide_html: "\ud0a4\ubcf4\ub4dc\ub85c \ud50c\ub808\uc774\uc5b4\ub97c \uc81c\uc5b4\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.",
            keyboard_disable_status: "\ud0a4\ubcf4\ub4dc \ube44\ud65c\uc131\ud654",
            keyboard_enable_status: "\ud0a4\ubcf4\ub4dc \ud65c\uc131\ud654",
            keyboard_status: "\ud0a4\ubcf4\ub4dc \ud65c\uc131\ud654 / \ube44\ud65c\uc131\ud654",
            locale: "\uc0ac\uc6a9\uc5b8\uc5b4",
            long_press_type: "\ub871 \ud504\ub808\uc2a4",
            main_filter: "\ud544\ud130",
            menu_button_type: "\uba54\ub274 \ubc84\ud2bc",
            move_background: "\ubc31\uadf8\ub77c\uc6b4\ub4dc\ub85c \uc774\ub3d9",
            move_screen: "\ud654\uba74\uc804\ud658",
            multitasking: "\uba40\ud2f0\ud0dc\uc2a4\ud0b9\ubaa8\ub4dc In / Out",
            net_status: "\ub124\ud2b8\uc6cc\ud06c \uc0c1\ud0dc",
            network_status: "\uc5f0\uacb0\uc0c1\ud0dc",
            no_heatmap_data: "\uc870\uac74\uc5d0 \ud574\ub2f9\ud558\ub294 \ud788\ud2b8\ub9f5 \ub370\uc774\ud130\uac00 \uc5c6\uc2b5\ub2c8\ub2e4.",
            object_image: "\uc624\ube0c\uc81d\ud2b8 \uc774\ubbf8\uc9c0",
            page_info_html: "\ucd1d <b>%{total}</b>\uac1c\uc911 <b>%{from}</b> - <b>%{to}</b> \uc138\uc158",
            per_page: "\uac1c\uc758 \uc138\uc158 \ubcf4\uae30",
            play: "\uc7ac\uc0dd\ud558\uae30",
            process: "\ud504\ub85c\uc138\uc2a4 \uac1c\uc218",
            process_in_crash: "\ud06c\ub798\uc2dc \ubc1c\uc0dd\uc2dc \ud504\ub85c\uc138\uc2a4 \uac1c\uc218",
            remaining_disk: "\ub514\uc2a4\ud06c \ub0a8\uc740 \uc6a9\ub7c9",
            remaining_memory: "\ub0a8\uc740 \uba54\ubaa8\ub9ac \uc6a9\ub7c9",
            replay_session: "\ucc98\uc74c\ubd80\ud130 \ub2e4\uc2dc \uc7ac\uc0dd",
            reset_filter: "\uc804\uccb4 \ucd08\uae30\ud654",
            same_user_sessions: "\uac19\uc740 \uc0ac\uc6a9\uc790 \uc138\uc158 \ud788\uc2a4\ud1a0\ub9ac",
            screen_filter: "\ud654\uba74 \uae30\uc900",
            screen_name: "\ud654\uba74 \uc774\ub984",
            screen_views: "\uc2a4\ud06c\ub9b0\ubdf0",
            select_screen: "\ud654\uba74 \uc120\ud0dd",
            select_version: "\ud65c\uc131\ud654 \ud558\uc2dc\ub824\uba74 \uc0c1\ub2e8\uc5d0\uc11c \uc571\ubc84\uc804\uc744 \uc120\ud0dd\ud574\uc8fc\uc138\uc694.",
            session_action_feed: "\uc138\uc158 \uc561\uc158\ud53c\ub4dc",
            session_info: "\uc138\uc158 \uc815\ubcf4",
            session_replay_is_not_available: "\uc138\uc158 \ub9ac\ud50c\ub808\uc774 \ub370\uc774\ud130\uac00 \uc5c6\uc2b5\ub2c8\ub2e4",
            sessions_list: "\uc0ac\uc6a9\uc790 \uc138\uc158 \ub9ac\uc2a4\ud2b8",
            show_all_sessions_of_same_user: "\uac19\uc740 \uc0ac\uc6a9\uc790\uc758 \ub2e4\ub978 \uc138\uc158\ubcf4\uae30",
            sort_by_session_number: "\uc138\uc158\uc218",
            stack_trace: "\uc2a4\ud0dd \ud2b8\ub808\uc774\uc2a4",
            start_app: "\uc571\uc2dc\uc791",
            start_screen: "\ud654\uba74\uc774\ub984",
            still_no_data_html: "\ud544\ud130 \ucd08\uae30\ud654 \uc774\ud6c4\uc5d0\ub3c4 \ub370\uc774\ud130\uac00 \uc5c6\ub294 \uacbd\uc6b0, \uc0c1\uc704\ud544\ud130\uc778 <b>\uad6d\uac00, \ubc84\uc804, \uae30\uac04\ud544\ud130</b>\ub97c \ud655\uc778\ud574\ubcf4\uc138\uc694.",
            swipe_down_type: "\uc544\ub798\ucabd",
            swipe_left_type: "\uc67c\ucabd",
            swipe_right_type: "\uc624\ub978\ucabd",
            swipe_type: "\uc2a4\uc640\uc774\ud504",
            swipe_up_type: "\uc704\ucabd",
            tap_object_type: "\ubc18\uc751\uc788\ub294 \ud0ed",
            tap_type: "\ubb34\ubc18\uc751 \ud0ed",
            there_is_no_data_html: "\uc120\ud0dd\ud55c \ud544\ud130\uc5d0 \ud574\ub2f9\ud558\ub294 \ub370\uc774\ud130\uac00 \uc5c6\uc2b5\ub2c8\ub2e4. \ud544\ud130\ub97c \uc870\uc815\ud574\uc8fc\uc138\uc694.",
            total_disk: "\ucd1d \ub514\uc2a4\ud06c \uc6a9\ub7c9",
            total_memory: "\ucd1d \uba54\ubaa8\ub9ac \uc6a9\ub7c9",
            typing_keyboard: "\ud0a4\ubcf4\ub4dc \uc0ac\uc6a9\uc911",
            unique_views: "\uc720\ub2c8\ud06c\ubdf0",
            unresponsive_type: "\ubc18\uc751\uc5c6\uc74c",
            usage_location: "\uc811\uc18d\uc9c0\uc5ed",
            use_keyboard_control: "\ud0a4\ubcf4\ub4dc \ubc29\ud5a5\ud0a4\ub85c \uc870\uc791 \uac00\ub2a5",
            user_action: "\uc0ac\uc6a9\uc790 \ud589\ub3d9",
            user_content: "\uc0ac\uc6a9\uc790 \uc815\uc758 \ucee8\ud150\uce20",
            user_info: "\uc0ac\uc6a9\uc790 \uc815\ubcf4",
            view_crashed_sessions: "\ud06c\ub798\uc2dc \uc138\uc158"
        },
        setting: {
            go_back: "\uc774\uc804\ud654\uba74\uc73c\ub85c \uc774\ub3d9",
            history: {
                app_name: "\uc571\uc774\ub984",
                confirm_date: "\uacb0\uc81c\uc77c",
                cost: "\uc0ac\uc6a9\uae08\uc561",
                expired_at: "\uc885\ub8cc\uae30\uac04",
                history: "\uc758 \uacb0\uc81c\ub0b4\uc5ed",
                issued_at: "\uc2dc\uc791\uae30\uac04",
                name: "\uacb0\uc81c\uc790",
                none_list: "\uc9c0\ubd88\ub0b4\uc5ed\uc774 \uc5c6\uc2b5\ub2c8\ub2e4.",
                platform: "\ud50c\ub7ab\ud3fc",
                price: "\uacb0\uc81c\uae08\uc561",
                sv_usage: "\uc2a4\ud06c\ub9b0\ubdf0 \uc0ac\uc6a9\ub7c9",
                title: "\uacb0\uc81c \ud788\uc2a4\ud1a0\ub9ac",
                total_cost: "\uccad\uad6c\uae08\uc561",
                use_plan: "\uc0ac\uc6a9\ud50c\ub79c",
                vat: "\ubd80\uac00\uc138"
            },
            member: {
                add_member_all: "\ubaa8\ub4e0 \uc571\uc5d0 \uacc4\uc815 \ucd08\ub300",
                inactive_user: "\ud734\uba74 \ucc98\ub9ac\ub41c \uacc4\uc815\uc785\ub2c8\ub2e4.",
                invitable_member: "\ucd08\ub300 \uba64\ubc84 \uc218",
                total_app_html: "\ucd1d <b>%{count}</b>\uac1c\uc758 \uc571\uc774 \uc788\uc2b5\ub2c8\ub2e4."
            },
            not_decide: "\uc900\ube44\uc911",
            payment: {
                add_vat: "10% VAT \ud3ec\ud568",
                app_count: "\uc571 \uc218",
                app_created_at: "\uc0dd\uc131\uc77c",
                app_member: "\uc5f0\uacb0\ub41c \uacc4\uc815 \uc218",
                app_name: "\uc571 \uc774\ub984",
                app_plan: "\ud50c\ub79c",
                app_plan_period: "\uc801\uc6a9\uae30\uac04",
                app_sv_usage: "\uc2a4\ud06c\ub9b0\ubdf0 \uc794\uc5ec\ub7c9",
                contract_period: "\uacc4\uc57d\uae30\uac04",
                contract_price: "\uacc4\uc57d \uae08\uc561",
                cost_prediction: "\uc608\uc0c1 \uacb0\uc81c\uae08\uc561",
                expected_cost: "\uc608\uc0c1 \uacb0\uc81c\uae08\uc561 (\uc6d0)",
                info: "\uacb0\uc81c\uc815\ubcf4",
                input_payment_email: "\uacb0\uc81c\ub2f4\ub2f9\uc790\uc758 \uc774\uba54\uc77c\uc744 \uc785\ub825\ud574\uc8fc\uc138\uc694",
                member_count: "\ucd08\ub300 \uacc4\uc815 \uc218",
                payment_email: "\uacb0\uc81c\ub2f4\ub2f9 \uba54\uc77c",
                payment_email_change: "\uacb0\uc81c\ub2f4\ub2f9 \uba54\uc77c \ubcc0\uacbd",
                remain_cost: "\uc794\uc561(\ubbf8\ub0a9\uae08\uc561)",
                service_pack_count: "\uc11c\ube44\uc2a4\ud329 \uc0ac\uc6a9\ud69f\uc218",
                service_pack_date: "\uc0ac\uc6a9\uc77c\uc790",
                service_pack_describe: "\uc11c\ube44\uc2a4 \ub0b4\uc6a9",
                service_pack_manager: "\ub2f4\ub2f9\uc790",
                service_pack_name: "\uc694\uccad\uc778",
                service_pack_none: "\uc0ac\uc6a9\ub0b4\uc5ed\uc774 \uc5c6\uc2b5\ub2c8\ub2e4.",
                service_pack_title: "\uc11c\ube44\uc2a4\ud329 \uc0ac\uc6a9\ud604\ud669",
                success: "\uce74\ub4dc \uacb0\uc81c\uac00 \uc131\uacf5\uc801\uc73c\ub85c \uc644\ub8cc\ub418\uc5c8\uc2b5\ub2c8\ub2e4! <br> \uc0ac\uc6a9\ub7c9 \ubc0f \uacfc\uae08\uc5d0 \uad00\ud55c \uc0c1\uc138\uc815\ubcf4\ub294 <b>\uacc4\uc815 > \uacb0\uc81c\uc815\ubcf4</b> \uc5d0\uc11c \ud655\uc778\ud558\uc2e4 \uc218 \uc788\uc2b5\ub2c8\ub2e4.",
                sv_usage_enterprise_title: "\uc571\ubcc4 \uc0ac\uc6a9\ud604\ud669",
                sv_usage_title: "\uc2a4\ud06c\ub9b0\ubdf0 \uc0ac\uc6a9\ub7c9",
                total_cost: "\ucd1d \uacb0\uc81c\uae08\uc561",
                total_sv_usage: "\ucd1d \uc2a4\ud06c\ub9b0\ubdf0 \uc0ac\uc6a9\ub7c9"
            },
            report: {
                alert: "\uc54c\ub9bc",
                modal_monday_contents_html: "\uc8fc(Week) \uc2dc\uc791\uc744 <b>\uc77c\uc694\uc77c</b>\ub85c \ud558\uc2dc\uaca0\uc2b5\ub2c8\uae4c?<br/><br/>\ubcc0\uacbd \ud6c4 \ub2e4\uc74c\uc8fc\ubd80\ud130 \ubc18\uc601\ub429\ub2c8\ub2e4. \ubcc0\uacbd\uc77c \uc774\uc804 \ub370\uc774\ud130\uae4c\uc9c0 \ubaa8\ub450 \uc801\uc6a9\ud558\uc2dc\ub824\uba74 \ubcc4\ub3c4\ub85c <a>\ubb38\uc758</a>\ud574 \uc8fc\uc2ed\uc2dc\uc624.<br/>",
                modal_sunday_contents_html: "\uc8fc(Week) \uc2dc\uc791\uc744 <b>\uc6d4\uc694\uc77c</b>\ub85c \ud558\uc2dc\uaca0\uc2b5\ub2c8\uae4c?<br/><br/>\ubcc0\uacbd \ud6c4 \ub2e4\uc74c\uc8fc\ubd80\ud130 \ubc18\uc601\ub429\ub2c8\ub2e4. \ubcc0\uacbd\uc77c \uc774\uc804 \ub370\uc774\ud130\uae4c\uc9c0 \ubaa8\ub450 \uc801\uc6a9\ud558\uc2dc\ub824\uba74 \ubcc4\ub3c4\ub85c <a>\ubb38\uc758</a>\ud574 \uc8fc\uc2ed\uc2dc\uc624.<br/>",
                set_week_start: "\uc8fc(Week) \uc2dc\uc791\uc77c \uae30\uc900",
                start_monday_html: "\uc77c\uc8fc\uc77c\uc758 \uc2dc\uc791\uc744 <b>\uc6d4\uc694\uc77c</b>\ub85c \uc124\uc815",
                start_sunday_html: "\uc77c\uc8fc\uc77c\uc758 \uc2dc\uc791\uc744 <b>\uc77c\uc694\uc77c</b>\ub85c \uc124\uc815 (\uae30\ubcf8)",
                title: "\ubd84\uc11d \ubcf4\uace0\uc11c \uc124\uc815",
                weekly_report: "\uc8fc\uac04 \ubcf4\uace0\uc11c"
            },
            timeset: "%Y\ub144 %m\uc6d4 %d\uc77c %H\uc2dc %M\ubd84 (GMT+9)",
            titles: {
                accounts: "\uacc4\uc815 \uc815\ubcf4",
                docs: "SDK \uac00\uc774\ub4dc",
                histories: "\uacb0\uc81c \ud788\uc2a4\ud1a0\ub9ac",
                members: "\uba64\ubc84 \uad00\ub9ac",
                payments: "\uacb0\uc81c \uc815\ubcf4",
                reports: "\ubd84\uc11d \ubcf4\uace0\uc11c \uc124\uc815"
            }
        },
        target_flows: {
            all_move_session_count: "\ucd1d \uc774\ub3d9 \uc138\uc158\uc218",
            created_at: "\ub4f1\ub85d\uc77c",
            fav_add: "\uc990\uaca8\ucc3e\uae30 \ucd94\uac00",
            fav_list: "\uc990\uaca8\ucc3e\uae30 \ubaa9\ub85d",
            fav_page_info_html: "\ucd1d <b>%{total}</b>\uac1c \ud654\uba74 \uc911 <b>%{page_info}</b>",
            fav_remove: "\uc990\uaca8\ucc3e\uae30 \ud574\uc81c",
            fav_screen: "\uc990\uaca8\ucc3e\uae30 \ud654\uba74",
            fav_total_list_html: "\ucd1d <b>%{count}</b>\uac1c\uc758 \uc990\uaca8\ucc3e\uae30 \ubaa9\ub85d",
            graph_info: "1\ub2e8\uacc4-15\ub2e8\uacc4 \uc774\ub3d9 \ubd84\ud3ec",
            move_session: "\uc774\ub3d9\uc138\uc158",
            n_step_beyond: "%{count}\ub2e8\uacc4 \uc774\uc0c1",
            no_graph_content_html: "15\ub2e8\uacc4 \uc774\ub0b4\uc758 \ub370\uc774\ud130\uac00 \uc5c6\uc2b5\ub2c8\ub2e4. <b>\uc2dc\uc791\ud654\uba74</b>\uacfc <b>\ubaa9\ud45c\ud654\uba74</b>\uc744 \uc124\uc815\ud574\uc8fc\uc138\uc694!",
            no_graph_title_html: "\uc571 \uc2dc\uc791\ubd80\ud130 \ubaa9\ud45c\ud654\uba74\uae4c\uc9c0 \uc774\ub3d9\ud69f\uc218 \ubd84\ud3ec\ub97c \ud45c\uc2dc\ud569\ub2c8\ub2e4. <b>\uc2dc\uc791\ud654\uba74</b>\uacfc <b>\ubaa9\ud45c\ud654\uba74</b>\uc744 \uc124\uc815\ud574\uc8fc\uc138\uc694!",
            no_main_content_html: "\ud654\uba74\uc744 \uc124\uc815\ud558\uace0 \ub2e8\uacc4\ubcc4 \ub9c9\ub300\ub97c \uc120\ud0dd\ud558\uba74, \uc774 \uacf3\uc5d0 \uc0c1\uc138 \uc774\ub3d9\ud750\ub984\uc774 \ud45c\uc2dc\ub429\ub2c8\ub2e4.",
            no_screeen_ver: "\uc120\ud0dd\ud55c \ubc84\uc804\uc5d0 \ud574\ub2f9\ud558\ub294 \ud654\uba74\uc774 \uc5c6\uc2b5\ub2c8\ub2e4.",
            one_to_n_step: "1~%{count}\ub2e8\uacc4",
            order_by_date: "\ucd5c\uc2e0\uc21c",
            screen_count: "\ubaa9\ud45c \ud654\uba74\uae4c\uc9c0 \uc774\ub3d9 \uc815\ubcf4",
            screen_count_info: "\uc124\uc815\ud55c \uad6c\uac04\uc758 \ud654\uba74\uc774\ub3d9\uc218\ubcc4 \ubd84\ud3ec\ub97c \ub098\ud0c0\ub0c5\ub2c8\ub2e4. \uac01 \ub2e8\uacc4 \ub9c9\ub300\ub97c \ud074\ub9ad\ud558\uba74 \uc544\ub798\uc5d0 \uc0c1\uc138\uacbd\ub85c\ub97c \uc138\uc158\uc218\uac00 \ub192\uc740 \uc21c\uc73c\ub85c \ud45c\uc2dc\ud569\ub2c8\ub2e4.",
            screen_sort_type: "\ud654\uba74 \uc815\ub82c \uae30\uc900",
            select_screen_modal: {
                help_html: "\u2022 \ub354\ube14\ud074\ub9ad\uc73c\ub85c \ud654\uba74\uc744 \uc120\ud0dd\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.<br/> \u2022 \ud574\ub2f9 \ud654\uba74\uc5d0\uc11c \uc2dc\uc791\ud55c \uc138\uc158 \uae30\uc900\uc73c\ub85c \uc815\ub82c\ub429\ub2c8\ub2e4.",
                nodata_notice_html: "\uc120\ud0dd\ud55c \ud544\ud130\uc5d0 \ud574\ub2f9\ud558\ub294 \ub370\uc774\ud130\uac00 \uc5c6\uc2b5\ub2c8\ub2e4. \uc0c1\ub2e8\uc758 \uc0ac\uc6a9\uc790, \uad6d\uac00, \ubc84\uc804, \ub0a0\uc9dc \ud544\ud130\ub97c \uc870\uc815\ud574\uc8fc\uc138\uc694.",
                screen_count: "\uac1c\uc758 \ud654\uba74\uc774 \uc788\uc2b5\ub2c8\ub2e4.",
                subtitle_html: '\ucd1d <span class="search_screen_count">-</span>\uac1c\uc758 \ud654\uba74\uc774 \uc788\uc2b5\ub2c8\ub2e4.',
                title: "\uacbd\ub85c \uc120\ud0dd",
                total: "\ucd1d"
            },
            select_step: "\ub2e8\uacc4 \uc120\ud0dd",
            session: "\uc138\uc158\uc218",
            session_start_screen: "\uc2dc\uc791 \ud654\uba74",
            session_start_screen_info: "\uc138\uc158\uc744 \uc2dc\uc791\ud588\uc744 \ub54c\uc758 \uccab \ud654\uba74\uc785\ub2c8\ub2e4. \ubc31\uadf8\ub77c\uc6b4\ub4dc \uc774\ub3d9 \ud6c4 \ub2e4\uc2dc \uc811\uc18d\ud55c \uacbd\uc6b0\ub3c4 \ud3ec\ud568\ub429\ub2c8\ub2e4.",
            session_target_screen: "\ubaa9\ud45c \ud654\uba74",
            session_target_screen_info: "\uc0ac\uc6a9\ud750\ub984\uc744 \ud655\uc778\ud558\uace0 \uc2f6\uc740 \ubaa9\ud45c \ud654\uba74\uc744 \uc120\ud0dd\ud569\ub2c8\ub2e4. (\uc608: \uac00\uc785, \uacb0\uc81c, \uc0c8\ub85c \ucd94\uac00\ud55c \ud654\uba74)",
            set_screen_html: "\ud654\uba74\uc744 \uc120\ud0dd\ud574\uc8fc\uc138\uc694.",
            table_title: "\ub2e8\uacc4 \uc0c1\uc138 \uc774\ub3d9\uacbd\ub85c",
            table_title_html: "\uc571 \uc2dc\uc791\ud654\uba74\ubd80\ud130 \ubaa9\ud45c\ud654\uba74\uae4c\uc9c0\uc758 \uc0c1\uc138\uacbd\ub85c\ub97c \ud45c\uc2dc\ud569\ub2c8\ub2e4.",
            tg_end_screen: "\ubaa9\ud45c \ud654\uba74",
            tg_start_screen: "\uc2dc\uc791 \ud654\uba74",
            total_count: "\ucd1d \ud569"
        },
        ui_analysis: {
            "10_more": "\uc774\ud6c4 10\uac1c \ub354\ubcf4\uae30",
            action: {
                all_screen: "\uc804\uccb4\ud654\uba74 \uc561\uc158",
                current_screen: "\ud604\uc7ac\ud654\uba74 \uc561\uc158",
                screen_view: {
                    all_screen: "\uc804\uccb4\ud654\uba74 \uc2a4\ud06c\ub9b0\ubdf0\ub2f9 \uc561\uc158",
                    current_screen: "\ud604\uc7ac\ud654\uba74 \uc2a4\ud06c\ub9b0\ubdf0\ub2f9 \uc561\uc158",
                    top: "1\uc704\ud654\uba74 \uc2a4\ud06c\ub9b0\ubdf0\ub2f9 \uc561\uc158"
                }
            },
            action_response_ratio: "\uc561\uc158 \ubc18\uc751\ub960",
            action_times: "\uc561\uc158\uc218",
            action_type: "\uc561\uc158 \uc720\ud615",
            actions: {
                all: "\ud604\uc7ac\ud654\uba74\uc758 \ucd1d \uc561\uc158",
                analysis: "\uc561\uc158 \ubd84\uc11d",
                analysis_explanation: "\ud604\uc7ac \ud654\uba74\uc5d0\uc11c \ubc1c\uc0dd\ud55c \uc885\ub958\ubcc4 \uc561\uc158\uc218\uc640 \ubb34\ubc18\uc751 \uc561\uc158\ube44\uc728\uc744 \uc54c \uc218 \uc788\uc2b5\ub2c8\ub2e4.",
                non_reacted_actions: "\ubb34\ubc18\uc751 \uc561\uc158\uc218",
                order: "\uc561\uc158 \uc21c\uc11c",
                ratio_to_kind: "\uc561\uc158 \uc885\ub958\ubcc4 \ube44\uc728",
                reacted: "\ubc18\uc751\ud55c \uc561\uc158",
                reacted_actions: "\ubc18\uc751 \uc561\uc158\uc218",
                total_actions: "\ucd1d \uc561\uc158\uc218"
            },
            all_average: "\uc804\uccb4\ud3c9\uade0",
            all_crash: "\uc804\uccb4 \ud06c\ub798\uc2dc",
            all_flow_export_title: "\uc758 \uc804\uccb4\uc0ac\uc6a9\ud750\ub984",
            all_screen_average_action_times: "\uc804\uccb4 \ud654\uba74 \ud3c9\uade0\uc561\uc158\uc218",
            all_screen_value: "\uc804\uccb4\uac12",
            allscreen: "\uc804\uccb4\ud654\uba74 \ubcf4\uae30",
            click_count: "\ud074\ub9ad\uc218",
            clicked_coordinate: "\ud574\ub2f9 \uc624\ube0c\uc81d\ud2b8\uac00 \uc5bc\ub9c8\ub9cc\ud07c \uc2a4\ud06c\ub864 \ub41c \ub4a4 \ud074\ub9ad \ub418\uc5c8\ub294\uc9c0\ub97c \ud45c\uc2dc\ud569\ub2c8\ub2e4",
            close_app: "\uc571 \uc885\ub8cc",
            collected_screenshot: {
                collected: "\uc218\uc9d1\ub428",
                date: "\uc2a4\ud06c\ub9b0\uc0f7 \uc218\uc9d1\uc77c",
                landscape: {
                    normal: "\uac00\ub85c \ud654\uba74",
                    scroll: "\uac00\ub85c \uc2a4\ud06c\ub864"
                },
                normal: "\uc77c\ubc18\ud654\uba74",
                not_collected: "\uc218\uc9d1\uc548\ub428",
                portrait: {
                    normal: "\uc138\ub85c \ud654\uba74",
                    scroll: "\uc138\ub85c \uc2a4\ud06c\ub864"
                },
                scroll: "\uc2a4\ud06c\ub864 \ud654\uba74",
                title: "\uc2a4\ud06c\ub9b0\uc0f7 \uc218\uc9d1\ud604\ud669"
            },
            compare_trend: "\ud2b8\ub798\ud53d \ud2b8\ub80c\ub4dc",
            compare_trend_sub: "2\uac1c \uc9c0\ud45c\ub97c \uc120\ud0dd\ud574 \ucd94\uc774\ub97c \ube44\uad50\ud574\ubcf4\uc138\uc694",
            confirm_delete_screen_alert: "\uc2a4\ud06c\ub9b0\uc0f7\uc774 \uc131\uacf5\uc801\uc73c\ub85c \uc0ad\uc81c\ub418\uc5c8\uc2b5\ub2c8\ub2e4.",
            confirm_delete_screen_content: "* \uc571 \uc0ac\uc6a9\uc790 \uc811\uc18d\uc2dc \uc0c8\ub85c\uc6b4 \uc2a4\ud06c\ub9b0\uc0f7\uc744 \uc218\uc9d1\ud569\ub2c8\ub2e4.",
            confirm_delete_screen_no: "\uc544\ub2c8\uc694",
            confirm_delete_screen_title: "\uc2a4\ud06c\ub9b0\uc0f7\uc744 \uc815\ub9d0\ub85c \uc0ad\uc81c\ud558\uc2dc\uaca0\uc2b5\ub2c8\uae4c?",
            confirm_delete_screen_yes: "\ub124",
            count_of: {
                all_actions: {
                    all_screen: "\uc804\uccb4\ud654\uba74 \ucd1d \uc561\uc158\uc218",
                    current_screen: "\ud604\uc7ac\ud654\uba74 \ucd1d \uc561\uc158\uc218",
                    most_screen: "\ucd5c\ub2e4\ud654\uba74 \ucd1d \uc561\uc158\uc218"
                },
                in_current_screen: {
                    action: "\ud604\uc7ac \ud654\uba74\uc758 \uc561\uc158 \uc218",
                    actions_1: "\ud604\uc7ac\ud654\uba74 \ucd1d \uc561\uc158\uc218",
                    actions_2: "\uc2a4\ud06c\ub9b0\ubdf0",
                    all_actions: "\ud604\uc7ac\ud654\uba74 \ucd1d \uc561\uc158\uc218",
                    all_taps: "\ud604\uc7ac\ud654\uba74 \ucd1d \ud0ed \uc218",
                    crash: "\ud604\uc7ac\ud654\uba74 \ud06c\ub798\uc2dc",
                    dul_actions_1: "\ud604\uc7ac\ud654\uba74 \ucd1d \uccb4\ub958\uc2dc\uac04",
                    non_reaction: "\ud604\uc7ac \ud654\uba74 \ubb34\ubc18\uc751\uc561\uc158\uc218",
                    non_tap: "\ud604\uc7ac\ud654\uba74 \ubb34\ubc18\uc751 \ud0ed \uc218",
                    screen_1: "\ud604\uc7ac\ud654\uba74 \ucd1d \uccb4\ub958\uc2dc\uac04",
                    screen_2: "\uc2a4\ud06c\ub9b0\ubdf0",
                    session_1: "\ud604\uc7ac\ud654\uba74 \uc2a4\ud06c\ub9b0\ubdf0",
                    session_2: "\ud604\uc7ac\ud654\uba74 \uc138\uc158\uc218"
                }
            },
            crash: {
                all_screen: "\uc804\uccb4\ud654\uba74 \ud06c\ub798\uc2dc",
                current_screen: "\ud604\uc7ac\ud654\uba74 \ud06c\ub798\uc2dc",
                top: "1\uc704\ud654\uba74 \ud06c\ub798\uc2dc"
            },
            crash_occur: "\ud06c\ub798\uc2dc \ubc1c\uc0dd",
            current_screen: "\ud604\uc7ac\ud654\uba74",
            double_tap: "\ub354\ube14\ud0ed",
            duration: {
                all_screen: "\uc804\uccb4\ud654\uba74 \uccb4\ub958\uc2dc\uac04",
                current_screen: "\ud604\uc7ac\ud654\uba74 \uccb4\ub958\uc2dc\uac04",
                screen_view: {
                    current_screen: "\ud604\uc7ac\ud654\uba74 \uc2a4\ud06c\ub9b0\ubdf0\ub2f9 \uccb4\ub958\uc2dc\uac04",
                    most_screen: "1\uc704\ud654\uba74 \uc2a4\ud06c\ub9b0\ubdf0\ub2f9 \uccb4\ub958\uc2dc\uac04"
                }
            },
            duration_of_current_page: "\ud604\uc7ac \ud398\uc774\uc9c0 \ubc29\ubb38\ub2f9 \uccb4\ub958\uc2dc\uac04(%)",
            edit_alias: "\ubcc4\uce6d \ubcc0\uacbd",
            exit: {
                all_screen: "\uc804\uccb4\ud654\uba74 \uc571\uc885\ub8cc",
                current_screen: "\ud604\uc7ac\ud654\uba74 \uc571\uc885\ub8cc",
                top: "1\uc704\ud654\uba74 \uc571\uc885\ub8cc"
            },
            exit_in_current_screen: "\ud604\uc7ac\ud654\uba74 \uc885\ub8cc",
            favorite: "\uc990\uaca8\ucc3e\uae30\ub9cc \ubcf4\uae30",
            first_press: "\uccab\ubc88\uc9f8 \uc561\uc158",
            go_to_all_screen: "\uc804\uccb4\ud654\uba74\uc73c\ub85c \uc774\ub3d9",
            graph_help: "\uadf8\ub798\ud504 \ube44\uc728 \ud45c\uc2dc \uae30\uc900",
            heatmap_and_screen_flow: "\ud788\ud2b8\ub9f5 \ubc0f \uc0ac\uc6a9\uc790 \uc720\uc785",
            heatmap_menu: {
                landscape: "\uac00\ub85c",
                portrait: "\uc138\ub85c",
                screen: "\ud654\uba74"
            },
            heatmap_preview: {
                help_1: "\uc88c\uce21\uc758 \uc2a4\ud06c\ub864 \uc2a4\ud06c\ub9b0\uc0f7 \uc601\uc5ed\uc5d0",
                help_2: "\ub9c8\uc6b0\uc2a4\ub97c \uc62c\ub9ac\uba74 \uc790\uc138\ud788 \ubcf4\uc2e4 \uc218 \uc788\uc2b5\ub2c8\ub2e4."
            },
            interaction_type: "\uc561\uc158 \uc720\ud615",
            interaction_type_ratio: "\uc778\ud130\ub809\uc158 \uc720\ud615\ubcc4 \ube44\uc728",
            landscape: "\uac00\ub85c",
            last_press: "\ub9c8\uc9c0\ub9c9 \uc561\uc158",
            long_press: "\ub871\ud504\ub808\uc2a4",
            main_action: "\uc2a4\ud06c\ub9b0\ubdf0\ub2f9 \uc561\uc158",
            main_crash: "\ud06c\ub798\uc2dc",
            main_duration: "\uc2a4\ud06c\ub9b0\ubdf0\ub2f9 \uccb4\ub958\uc2dc\uac04",
            main_exit: "\uc571\uc885\ub8cc",
            main_noaction: "\ubb34\ubc18\uc751 \ud0ed \ube44\uc728",
            main_screen: "\uc2a4\ud06c\ub9b0\ubdf0",
            main_screen_indicators: "\ud654\uba74 \uc8fc\uc694 \uc9c0\ud45c",
            main_screen_name: "\ud654\uba74\uc774\ub984",
            main_screen_per_session: "\uc138\uc158\ub2f9 \uc2a4\ud06c\ub9b0\ubdf0",
            main_session: "\uc138\uc158",
            main_user: "\uc77c\ud3c9\uade0 \uc0ac\uc6a9\uc790",
            most_screen: "\ucd5c\ub2e4\ud654\uba74",
            move_frequency: "\ud654\uba74 \uc774\ub3d9 \ube48\ub3c4",
            move_sessions: "\uc774\ub3d9\uc218 (\ube44\uc728)",
            next: "\ub2e4\uc74c\ud654\uba74 \ub9ac\uc2a4\ud2b8",
            no_app_view_analysis_for_this_app_yet: "\uc774 \ud654\uba74\uc5d0 \uc544\uc9c1 \ubd84\uc11d\ub41c \uacb0\uacfc\uac00 \uc5c6\uc2b5\ub2c8\ub2e4. \ubc84\uc804\uc774\ub098 \uae30\uac04, \uae30\uae30 \ud544\ud130\ub97c \ubcc0\uacbd\ud574\ubcf4\uc138\uc694",
            no_scroll_analysis: "\ud574\ub2f9\uc5c6\uc74c",
            no_scroll_heatmap: {
                help_1: "\uc11c\ube44\uc2a4 \uc900\ube44\uc911\uc785\ub2c8\ub2e4.",
                help_2: "\ud604\uc7ac \uc548\ub4dc\ub85c\uc774\ub4dc\ub9cc \uc9c0\uc6d0\ud558\uba70,",
                help_3: "iOS\ub294 \uc624\ud508 \uc900\ube44\uc911\uc5d0 \uc788\uc2b5\ub2c8\ub2e4."
            },
            noaction_times: "\ubb34\ubc18\uc751 \ud0ed \uc218",
            non_action: {
                current_all_action: "\ud604\uc7ac\ud654\uba74 \ucd1d \ud0ed\uc218",
                current_screen: "\ud604\uc7ac\ud654\uba74 \ubb34\ubc18\uc751 \ud0ed\uc218",
                rate: "\ud604\uc7ac\ud654\uba74 \ubb34\ubc18\uc751 \ud0ed \ube44\uc728",
                top: "1\uc704\ud654\uba74 \ubb34\ubc18\uc751 \ud0ed \ube44\uc728"
            },
            num_times: "\ubc1c\uc0dd\uc218",
            object: {
                all: "\ud604\uc7ac\ud654\uba74\uc758 \ucd1d \uc624\ube0c\uc81d\ud2b8",
                thumbnail: "\uc624\ube0c\uc81d\ud2b8 \uc378\ub124\uc77c",
                tracking: "\uc624\ube0c\uc81d\ud2b8 \ud2b8\ub798\ud0b9",
                used: "\uc0ac\uc6a9\ub41c \uc624\ube0c\uc81d\ud2b8"
            },
            object_id: "\uc624\ube0c\uc81d\ud2b8 ID",
            object_key: "\uae30\uc874 \uc624\ube0c\uc81d\ud2b8 ID",
            object_response_ratio: "\uc624\ube0c\uc81d\ud2b8 \uc0ac\uc6a9\ub960",
            object_screenshot_updated_at: "\uc624\ube0c\uc81d\ud2b8 \uc774\ubbf8\uc9c0 \uc218\uc9d1\uc77c",
            object_tracking: "\uc624\ube0c\uc81d\ud2b8 \ud2b8\ub798\ud0b9",
            objects: "\uc624\ube0c\uc81d\ud2b8 \ub9ac\uc2a4\ud2b8",
            open_app: "\uc571 \uc2dc\uc791",
            orientation_landscape: "\uac00\ub85c\ud654\uba74",
            orientation_portrait: "\uc138\ub85c\ud654\uba74",
            others_detail: "\uc0c1\uc138 \ub0b4\uc5ed",
            page_info: "\ud398\uc774\uc9c0 \uc815\ubcf4",
            portrait: "\uc138\ub85c",
            preview_action: "SV\ub2f9 \uc561\uc158",
            preview_duration: "SV\ub2f9 \uccb4\ub958\uc2dc\uac04",
            previous: "\uc774\uc804\ud654\uba74 \ub9ac\uc2a4\ud2b8",
            ranking_trend: "\uc21c\uc704 \ud2b8\ub80c\ub4dc",
            ranking_trend_sub: "8\uac1c \uc9c0\ud45c\uc758 \uc21c\uc704 \ubcc0\ud654\ub97c \uc0b4\ud3b4\ubcf4\uc138\uc694 (\ucd5c\ub300 8\uac1c \uc120\ud0dd\uac00\ub2a5)",
            ratio: "\ube44\uc728",
            ratio_to: {
                all: "\uc804\uccb4 \ub300\ube44 \ube44\uc728",
                all_screen: "\uc804\uccb4 \ub300\ube44 \ube44\uc728(%)",
                in_current_screen: {
                    tab_to_all_action: "\ud604\uc7ac\ud654\uba74 \ucd1d\uc561\uc158 \ub300\ube44 \ud0ed \ube44\uc728"
                },
                non_reaction: "\ubb34\ubc18\uc751\uc561\uc158 \ube44\uc728",
                swipe_way: "\uc2a4\uc640\uc774\ud504 \ubc29\ud5a5\ubcc4 \ube44\uc728",
                top: "1\uc704\ud654\uba74 \ub300\ube44 \ube44\uc728(%)"
            },
            responsed_click: "\ubc18\uc751\uc788\ub294 \ud0ed",
            screen_key: "\uae30\uc874 \ud654\uba74\uc774\ub984",
            screen_list_page: {
                favorite_nothing: "\uc990\uaca8\ucc3e\uae30\ud55c \ud654\uba74\uc774 \uc5c6\uc2b5\ub2c8\ub2e4.",
                screen_not_found: "\uac80\uc0c9\ub41c \ud654\uba74\uc774 \uc5c6\uc2b5\ub2c8\ub2e4.",
                title_html: "\ucd1d <span id='total-screen-count'><b class='count'>%{total_count}</b></span> \uac1c \ud654\uba74 \uc911 <b class='count'>%{screen_count}</b>\uac1c \ub370\uc774\ud130 \uc218\uc9d1\ub428, %{page_info}\uac1c \ud45c\uc2dc"
            },
            screen_name: "\ud654\uba74 \uc774\ub984",
            screen_ranking_top_ten: "\uac01 \uc9c0\ud45c\ubcc4\ub85c \uc22b\uc790\uac00 \ub192\uc740 \uc21c\uc11c\ub300\ub85c 10\uac1c\uc758 \ud654\uba74\uc774 \ubcf4\uc5ec\uc9d1\ub2c8\ub2e4.",
            screen_setting: "\ud654\uba74 \uc124\uc815",
            screen_view: {
                all: "\uc804\uccb4 \uc2a4\ud06c\ub9b0\ubdf0",
                all_average: "\uc804\uccb4\ud3c9\uade0 \uc2a4\ud06c\ub9b0\ubdf0",
                current_screen: "\ud604\uc7ac\ud654\uba74 \uc2a4\ud06c\ub9b0\ubdf0",
                most_screen: "\ucd5c\uc7a5\ud654\uba74 \uc2a4\ud06c\ub9b0\ubdf0",
                top: "1\uc704\ud654\uba74 \uc2a4\ud06c\ub9b0\ubdf0"
            },
            scroll_analysis: "\uc2a4\ud06c\ub864 \ubd84\uc11d",
            scroll_demo_img: "\uc2a4\ud06c\ub864 \ubd84\uc11d DEMO \uc774\ubbf8\uc9c0",
            second_press: "\ub450\ubc88\uc9f8 \uc561\uc158",
            select_screen_to_analyze: "\ubd84\uc11d\ud558\ub824\ub294 \ud654\uba74\uc744 \uc120\ud0dd\ud574 \uc8fc\uc138\uc694. \ud654\uba74\uc774 \uc5c6\ub294 \uacbd\uc6b0 \ubc84\uc804 \ud544\ud130\ub97c \ubcc0\uacbd\ud574\ubcf4\uc138\uc694.",
            selected_object: "\uc120\ud0dd\ub41c \uc624\ube0c\uc81d\ud2b8",
            selected_screen: "\ub300\ud45c \uc120\ud0dd\ud654\uba74",
            selindex_alert_info: "\uc9c0\ud45c \uc120\ud0dd\uc740 3\uac1c\uae4c\uc9c0 \uac00\ub2a5\ud569\ub2c8\ub2e4.",
            session_count_of_current_page: "\ud604\uc7ac \ud398\uc774\uc9c0 \uc138\uc158\uc218 (%)",
            session_info: "\uc138\uc158 \uc815\ubcf4",
            sessions: {
                all: "\uc804\uccb4 \uc138\uc158",
                all_screen: "\uc804\uccb4\ud654\uba74 \uc138\uc158 \ud569\uacc4",
                current_screen: "\ud604\uc7ac\ud654\uba74 \uc138\uc158\uc218",
                top: "1\uc704\ud654\uba74 \uc138\uc158\uc218"
            },
            sort_by: "\uc815\ub82c",
            sort_by_screen_name: "\ud654\uba74\uc774\ub984\uc21c",
            swipe: "\uc2a4\uc640\uc774\ud504",
            swipe_direction: "\uc2a4\uc640\uc774\ud504 \ubc29\ud5a5",
            swipe_direction_ratio: "\uc2a4\uc640\uc774\ud504 \ubc29\ud5a5\ubcc4 \ube44\uc728",
            tap: "\ud0ed",
            tap_count: "\ud0ed \uc218",
            tap_response_ratio: "\ud0ed \ubc18\uc751\ub960",
            taps: {
                all: "\ud604\uc7ac\ud654\uba74\uc758 \ucd1d \ud0ed",
                reacted: "\ubc18\uc751\ud55c \ud0ed"
            },
            there_is_no_data_html: "\ud604\uc7ac <b>\ud544\ud130</b> \uc870\uac74\uc5d0 \ud574\ub2f9\ub418\ub294 \ub370\uc774\ud130\uac00 \uc5c6\uc2b5\ub2c8\ub2e4. <b>\ud544\ud130</b>\ub97c \ub2e4\uc2dc \uc124\uc815\ud574 \uc8fc\uc138\uc694.",
            third_press: "\uc138\ubc88\uc9f8 \uc561\uc158",
            top_screen: "1\uc704\uac12",
            total_action_count: "\ucd1d \uc561\uc158",
            total_duration: "\ucd1d \uccb4\ub958\uc2dc\uac04",
            total_screen_count_html: "\uc804\uccb4 \ud654\uba74 <b>%{count}</b>\uac1c",
            total_session: "\ucd1d \uc138\uc158",
            total_session_count: "/ \uc804\uccb4 \ud398\uc774\uc9c0 \uc138\uc158\uc218 \ub300\ube44",
            traffic_trend: "\ud2b8\ub798\ud53d \ud2b8\ub80c\ub4dc",
            trend_analytics: "\ud2b8\ub80c\ub4dc \ubd84\uc11d",
            ui_interactions_analysis: "UI \uc778\ud130\ub809\uc158 \ubd84\uc11d",
            ui_interactions_info: "UI \uc778\ud130\ub809\uc158 \uc815\ubcf4",
            unresponsive_click: "\ubc18\uc751\uc5c6\ub294 \ud0ed",
            unresponsive_click_count: "\ubc18\uc751\uc5c6\ub294 \ud0ed",
            unresponsive_tap: "\ubc18\uc751\uc5c6\ub294 \ud0ed",
            user: {
                all_screen: "\uc804\uccb4\ud654\uba74 \uc77c\ud3c9\uade0 \uc0ac\uc6a9\uc790",
                current_screen: "\ud604\uc7ac\ud654\uba74 \uc77c\ud3c9\uade0 \uc0ac\uc6a9\uc790",
                top: "1\uc704\ud654\uba74 \uc77c\ud3c9\uade0 \uc0ac\uc6a9\uc790"
            },
            view_more: "\uc774\ud6c4 %{count}\uac1c \ub354\ubcf4\uae30",
            view_others: "\ub2e4\ub978\ud654\uba74 \ubcf4\uae30",
            "warning-no-screenshot": {
                contents_html: "\uc0ac\uc6a9\uc790\uac00 \uc571\uc744 \uc815\uc0c1\uc801\uc73c\ub85c \uc885\ub8cc\ud574 \ubc31\uadf8\ub77c\uc6b4\ub4dc\ub85c \uc804\ud658 \ub418\uc5b4\uc57c \uc2a4\ud06c\ub9b0\uc0f7\uc744 \uc218\uc9d1\ud569\ub2c8\ub2e4. <br/> \uc571\uc744 <b>\uc815\uc0c1\uc801\uc73c\ub85c \uc885\ub8cc</b>\ud55c \ub4a4 \uc2a4\ud06c\ub9b0\uc0f7\uc774 \uc81c\ub300\ub85c \uc218\uc9d1\ub418\ub294\uc9c0 \ud655\uc778\ud558\uac70\ub098 \uc571 \uc124\uc815 \uba54\ub274\uc5d0\uc11c <b>\uc5c5\ub85c\ub4dc \uc124\uc815</b>\uc744 \ud655\uc778\ud558\uc5ec \uc8fc\uc2dc\uae30 \ubc14\ub78d\ub2c8\ub2e4.",
                title_html: "\uc2a4\ud06c\ub9b0\uc0f7\uc774 \uc81c\ub300\ub85c \uc218\uc9d1\ub418\uace0 \uc788\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4."
            }
        },
        view_flows: {
            all_flows_analysis: "\uc804\uccb4 \uc0ac\uc6a9\ud750\ub984",
            analyze_screen: "\ud654\uba74 \ubd84\uc11d\uc73c\ub85c \uc774\ub3d9",
            average_screen_moves: "\ud3c9\uade0\uc774\ub3d9\uc218",
            avg_all: "\uc804\uccb4 \ud3c9\uade0",
            back_button: "\ub4a4\ub85c\uac00\uae30 \ubc84\ud2bc",
            basic_index: "\ud604\uc7ac \uacbd\ub85c \uae30\ubcf8\uc9c0\ud45c",
            basic_index_sub: "(\uc804\uccb4\uacbd\ub85c \ub300\ube44 \uc120\ud0dd\uacbd\ub85c)",
            current_flow: "\ud604\uc7ac \uacbd\ub85c",
            duplicated_moves: "\ub3d9\uc77c \uacbd\ub85c \ubc18\ubcf5 \uc774\ub3d9",
            each_flows_analysis: "\uac1c\ubcc4 \uacbd\ub85c\ubd84\uc11d",
            flow: "\uacbd\ub85c",
            go_each_screen: "\ud654\uba74\ubd84\uc11d \uc774\ub3d9",
            graph_based_on: "\uc6d0 \ud45c\uc2dc \uae30\uc900",
            graph_view: "\uadf8\ub798\ud504 \ubcf4\uae30",
            inflow: "\uc720\uc785\uacbd\ub85c",
            inflow_and_outflow: "\uc720\uc785 & \uc720\ucd9c",
            list_view: "\ub9ac\uc2a4\ud2b8 \ubcf4\uae30",
            no_object_data: "\ub370\uc774\ud130\uac00 \uc5c6\uc2b5\ub2c8\ub2e4. \uc790\ub3d9\uc73c\ub85c \uc774\ub3d9\ud55c \ud398\uc774\uc9c0\uc758 \uacbd\uc6b0 \uc561\uc158 \ubc0f \uc624\ube0c\uc81d\ud2b8\uac00 \uc218\uc9d1\ub418\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4.",
            no_screenshot: "\uc774\ubbf8\uc9c0 \uc218\uc9d1 \uc548 \ub428",
            no_screenshot_info: "\uc774\ubbf8\uc9c0\ub294 Test \ubaa8\ub4dc\uc5d0\uc11c \uc218\uc9d1\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.",
            object_without_id: "\uc54c \uc218 \uc5c6\ub294 \uc624\ube0c\uc81d\ud2b8",
            outflow: "\uc720\ucd9c\uacbd\ub85c",
            pagination_html: "\ucd1d <b>%{total}</b>\uac1c \uc911 <b>%{first}-%{last}</b>",
            recommend_screen: "\ucd94\ucc9c\ud654\uba74",
            right_blank_html: "\uc88c\uce21\uc758 \ud14c\uc774\ube14 \ud639\uc740 \uadf8\ub798\ud504\uc5d0\uc11c \uac1c\ubcc4 \uacbd\ub85c\uc5d0 \ub300\ud55c \uc0c1\uc138 \uc815\ubcf4\ub97c \ud655\uc778\ud558\uc138\uc694.",
            route_moving_method: "\uacbd\ub85c \uc774\ub3d9 \uc218\ub2e8",
            route_moving_method_sub: "(\uacbd\ub85c \uc774\ub3d9 \uc218\ub2e8 \uc815\ubcf4\ub294 2016\ub144 8\uc6d4 1\uc77c \uc774\ud6c4 \ub370\uc774\ud130 \uae30\uc900\uc73c\ub85c \uc81c\uacf5 \ub429\ub2c8\ub2e4.)",
            same_route_moves: "\ubc18\ubcf5\uc774\ub3d9 \ud69f\uc218",
            screen_moves: "\uc774\ub3d9\uc218",
            search_by_screenshot: "\uc2a4\ud06c\ub9b0\uc0f7\uc73c\ub85c \ucc3e\uae30",
            sessions: "\uc138\uc158\uc218",
            slider: "\uc0c1\uc704",
            slider_span: "\ud654\uba74\uac04 \uc774\ub3d9 \ud2b8\ub798\ud53d",
            start_screen: "\uc2dc\uc791\ud654\uba74",
            swipe: "\uc2a4\uc640\uc774\ud504",
            target_flows_analysis: "\ubaa9\ud45c \uc0ac\uc6a9\ud750\ub984",
            target_screen: "\ubaa9\ud45c\ud654\uba74",
            total_avg_screen_moves: "\ud3c9\uade0 \uc774\ub3d9\uc218\uc758 \uc804\uccb4 \ud3c9\uade0",
            view_activity: "\uc791\uc740 \ub178\ub4dc \uc81c\uac70",
            view_flows_analysis: "\uacbd\ub85c\ubd84\uc11d",
            view_screenshot: "\uc2a4\ud06c\ub9b0\uc0f7 \ubcf4\uae30"
        }
    },
    date: {
        abbr_day_names: ["\uc77c", "\uc6d4", "\ud654", "\uc218", "\ubaa9", "\uae08", "\ud1a0"],
        abbr_month_names: [null, "1\uc6d4", "2\uc6d4", "3\uc6d4", "4\uc6d4", "5\uc6d4", "6\uc6d4", "7\uc6d4", "8\uc6d4", "9\uc6d4", "10\uc6d4", "11\uc6d4", "12\uc6d4"],
        day_names: ["\uc77c\uc694\uc77c", "\uc6d4\uc694\uc77c", "\ud654\uc694\uc77c", "\uc218\uc694\uc77c", "\ubaa9\uc694\uc77c", "\uae08\uc694\uc77c", "\ud1a0\uc694\uc77c"],
        formats: {
            "default": "%Y/%m/%d",
            "long": "%Y\ub144 %m\uc6d4 %d\uc77c",
            "short": "%m/%d"
        },
        month_names: [null, "1\uc6d4", "2\uc6d4", "3\uc6d4", "4\uc6d4", "5\uc6d4", "6\uc6d4", "7\uc6d4", "8\uc6d4", "9\uc6d4", "10\uc6d4", "11\uc6d4", "12\uc6d4"],
        order: ["year", "month", "day"],
        start_date: "\uc2dc\uc791\uc77c"
    },
    datetime: {
        distance_in_words: {
            about_x_hours: {
                one: "\uc57d \ud55c \uc2dc\uac04",
                other: "\uc57d %{count}\uc2dc\uac04"
            },
            about_x_months: {
                one: "\uc57d \ud55c \ub2ec",
                other: "\uc57d %{count}\ub2ec"
            },
            about_x_years: {
                one: "\uc57d \uc77c \ub144",
                other: "\uc57d %{count}\ub144"
            },
            almost_x_years: {
                one: "\uc77c \ub144 \uc774\ud558",
                other: "%{count}\ub144 \uc774\ud558"
            },
            half_a_minute: "30\ucd08",
            less_than_x_minutes: {
                one: "\uc77c \ubd84 \uc774\ud558",
                other: "%{count}\ubd84 \uc774\ud558"
            },
            less_than_x_seconds: {
                one: "\uc77c \ucd08 \uc774\ud558",
                other: "%{count}\ucd08 \uc774\ud558"
            },
            over_x_years: {
                one: "\uc77c \ub144 \uc774\uc0c1",
                other: "%{count}\ub144 \uc774\uc0c1"
            },
            x_days: {
                one: "\ud558\ub8e8",
                other: "%{count}\uc77c"
            },
            x_minutes: {
                one: "\uc77c \ubd84",
                other: "%{count}\ubd84"
            },
            x_months: {
                one: "\ud55c \ub2ec",
                other: "%{count}\ub2ec"
            },
            x_seconds: {
                one: "\uc77c \ucd08",
                other: "%{count}\ucd08"
            }
        },
        prompts: {
            day: "\uc77c",
            hour: "\uc2dc",
            minute: "\ubd84",
            month: "\uc6d4",
            second: "\ucd08",
            year: "\ub144"
        }
    },
    dev_mode_alert: {
        body_html: "<p>\uc720\uc800\ud574\ube57\uc744 \uc11c\ube44\uc2a4 \uc911\uc778 \uc571\uc5d0 \uc801\uc6a9\ud558\uae30 \uc804\uc5d0 Test \ubaa8\ub4dc\uc5d0\uc11c \ub370\uc774\ud130\uac00 \ubb38\uc81c\uc5c6\uc774 \uc218\uc9d1\ub418\ub294\uc9c0 \ud14c\uc2a4\ud2b8\ud574\ubcf4\uc138\uc694. (<a href='%{href}' target='_blank'>SDK \uac00\uc774\ub4dc</a>)</p> <p> <span class='pinfo'>* Test \ubaa8\ub4dc\uc5d0\uc11c\ub294 \uc5ec\ub7ec\ubd84\uc758 \uc720\uc800\ud574\ube57 \uc801\uc6a9\uc744 \ub3d5\uae30 \uc704\ud574 \ub370\uc774\ud130\ub97c \ubaa8\ub2c8\ud130\ub9c1\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.</span><br/> <span class='pinfo'>** Test \ubaa8\ub4dc\uc758 \ub370\uc774\ud130\ub294 \uc77c\uc815 \uae30\uac04\uc774 \uc9c0\ub098\uba74 \uc0ac\ub77c\uc9d1\ub2c8\ub2e4.</span><br/> </p>",
        check_integration: {
            title: "Production \ubaa8\ub4dc\ub85c \uc774\ub3d9\ud569\ub2c8\ub2e4."
        },
        diff_version: {
            title: "Test \ubaa8\ub4dc\uc640 Production \ubaa8\ub4dc\uc758 \uc571 \ubc84\uc804\uc774 \ub2e4\ub985\ub2c8\ub2e4!"
        },
        req_prd_integration: {
            title: "\uc774\uc81c \uc720\uc800\ud574\ube57\uc744 \uc11c\ube44\uc2a4 \uc911\uc778 \uc571\uc5d0 \uc801\uc6a9\ud574\ubcf4\uc138\uc694!"
        },
        reset: {
            content1_html: "<span class='bold-blue'>%{name}</span> \ubc84\uc804\uc758 \ub370\uc774\ud130\uac00 \uc0ad\uc81c\ub418\uace0 \ucc98\uc74c\ubd80\ud130 \ub2e4\uc2dc \uc218\uc9d1\ub429\ub2c8\ub2e4.<br/> \ud55c \ubc88 \uc0ad\uc81c\ub41c \ub370\uc774\ud130\ub294 \ub2e4\uc2dc \ubcf5\uad6c\ud560 \uc218 \uc5c6\uc73c\ubbc0\ub85c \uc720\uc758\ud574\uc8fc\uc138\uc694.",
            content2_html: "\ucd08\uae30\ud654\ud558\uc2dc\ub824\uba74 \uc544\ub798 \uce78\uc5d0 <b>'<span class='confirm-reset-txt'>\ucd08\uae30\ud654</span>'</b>\ub97c \uc785\ub825\ud574\uc8fc\uc138\uc694.",
            reset_fail: "\ub370\uc774\ud130 \ucd08\uae30\ud654\ub97c \uc2e4\ud328\ud558\uc600\uc2b5\ub2c8\ub2e4.",
            reset_success: "\uc131\uacf5\uc801\uc73c\ub85c \ub370\uc774\ud130\ub97c \ucd08\uae30\ud654 \ud558\uc600\uc2b5\ub2c8\ub2e4.",
            title_html: "<span class='bold-blue'>%{name}</span> \ubc84\uc804\uc758 \ub370\uc774\ud130\ub97c \ucd08\uae30\ud654\ud569\ub2c8\ub2e4."
        },
        reset_txt: "\ub370\uc774\ud130 \ucd08\uae30\ud654",
        title: "Test \ubaa8\ub4dc\uc785\ub2c8\ub2e4",
        try_integration: {
            title: "Test \ubaa8\ub4dc\uc5d0 \ub370\uc774\ud130\uac00 \uc5c6\uc2b5\ub2c8\ub2e4!"
        },
        update_alert_content_footer_html: "* \ud14c\uc2a4\ud2b8\ud560 \ub54c\ub294 \uac1c\ubc1c\uc790 API\ud0a4\ub97c \uc11c\ube44\uc2a4 \uc911\uc778 \uc571\uc5d0 \uc801\uc6a9\ud560 \ub54c\ub294 \uc81c\ud488 API \ud0a4\ub97c \uc801\uc6a9\ud558\uc138\uc694.",
        update_alert_content_html: "\uc720\uc800\ud574\ube57\uc744 \uc11c\ube44\uc2a4 \uc911\uc778 \uc571\uc5d0 \uc801\uc6a9\ud558\uae30 \uc804\uc5d0 Test \ubaa8\ub4dc\uc5d0\uc11c \ub370\uc774\ud130\uac00 \ubb38\uc81c\uc5c6\uc774 \uc218\uc9d1\ub418\ub294\uc9c0 \ud14c\uc2a4\ud2b8\ud574\ubcf4\uc138\uc694.",
        update_alert_content_title_html: "<b>Test \ubaa8\ub4dc</b>\uac00 \uc0c8\ub86d\uac8c \ucd94\uac00\ub418\uc5c8\uc2b5\ub2c8\ub2e4!"
    },
    devise: {
        ab_test: {
            customer_list: "\uc720\uc800\ud574\ube57\uc73c\ub85c \ub370\uc774\ud130 \ubd84\uc11d \uc911\uc778 \uace0\uac1d\uc0ac\ub4e4",
            history: {
                list_1: "\uac04\ub2e8\ud55c \uc5f0\ub3d9\uc73c\ub85c \uac15\ub825\ud55c \ub370\uc774\ud130 \uc218\uc9d1",
                list_2: "\uc0ac\uc6a9\uc790\ub4e4\uc758 \uc571 \ub0b4 \ubaa8\ub4e0 \ud589\ub3d9 \ud2b8\ub798\ud0b9",
                list_3: "\uc571 \ub0b4\uc758 \uc0ac\uc6a9\uc790 \ud654\uba74 \uc774\ub3d9\uacbd\ub85c \uc190\uc27d\uac8c \ud30c\uc545",
                list_4: "\uac1c\ubcc4 \uc0ac\uc6a9\uc790\uc758 \uc138\uc158 \ub9ac\ud50c\ub808\uc774\ub85c \uc7ac\ud604",
                list_5: "\uc9c1\uad00\uc801\uc778 \ub370\uc774\ud130 \uc774\ud574\uac00 \uac00\ub2a5\ud55c \uc2dc\uac01\ud654"
            },
            registrations: {
                title_1: "\uc9c0\uae08 \uac00\uc785\ud558\uc154\uc11c",
                title_2: "\uc720\uc800\ud574\ube57\uc758 \uac15\ub825\ud55c \uae30\ub2a5\uc744 \uc9c1\uc811 \uccb4\ud5d8\ud574\ubcf4\uc138\uc694!"
            },
            userhabit_feature: "\uc720\uc800\ud574\ube57\uc758 \uac15\ub825\ud55c \uae30\ub2a5"
        },
        after_sign_up: {
            request_email: "\uc778\uc99d\uba54\uc77c \uc7ac\ubc1c\uc1a1",
            request_message: "\uc774\uba54\uc77c \uc778\uc99d\uc744 \uc644\ub8cc\ud574\uc8fc\uc138\uc694!",
            sending_message: "<b>%{user}</b> \ub85c \uc778\uc99d \uc774\uba54\uc77c\uc774 \ubc1c\uc1a1\ub418\uc5c8\uc2b5\ub2c8\ub2e4!",
            sending_message_after: "\uba54\uc77c\uc744 \ud655\uc778\ud55c \ud6c4 \ub9c1\ud06c\ub97c \ud074\ub9ad\ud574 \uc778\uc99d\uc744 \uc9c4\ud589\ud574\uc8fc\uc138\uc694.",
            sending_message_noti: "\ub9cc\uc77c \uba54\uc77c\uc744 \ubc1b\uc9c0 \ubabb\ud558\uc168\ub2e4\uba74, <b>\uc2a4\ud338\uba54\uc77c\ud568</b>\uc744 \ud655\uc778\ud574 \uc8fc\uc138\uc694.",
            sign_in_message: "\uba54\uc77c\uc744 \ud655\uc778\ud558\uc168\ub098\uc694?",
            yet_message: "\ud639\uc2dc \uba54\uc77c\uc744 \ubc1b\uc9c0 \ubabb\ud558\uc168\ub098\uc694?"
        },
        browser_opt: "\ubcf8 \uc0ac\uc774\ud2b8\ub294 Chrome, Safari \ube0c\ub77c\uc6b0\uc800\uc5d0 \ucd5c\uc801\ud654\ub418\uc5b4 \uc788\uc2b5\ub2c8\ub2e4.",
        confirmations: {
            already_confirm: "\uc774\ubbf8 \uacc4\uc815\uc774 \uc2b9\uc778\ub418\uc5c8\uc2b5\ub2c8\ub2e4.",
            confirmed: "\uacc4\uc815\uc774 \uc2b9\uc778\ub418\uc5c8\uc2b5\ub2c8\ub2e4.",
            invalid_email: "\ub4f1\ub85d\ub418\uc9c0 \uc54a\uc740 \uc774\uba54\uc77c\uc785\ub2c8\ub2e4. \ub2e4\uc2dc \uc785\ub825\ud574\uc8fc\uc2ed\uc2dc\uc694.",
            mail_title: "\uc548\ub155\ud558\uc138\uc694 \uc564\ubc97\uc785\ub2c8\ub2e4. \uac00\uc785\uc778\uc99d\uc744 \uc9c4\ud589\ud574\uc8fc\uc138\uc694.",
            output_email_blank: "\ubc1b\uc73c\uc2e4 \uc774\uba54\uc77c \uc8fc\uc18c\ub97c \uc785\ub825\ud574\uc8fc\uc138\uc694.",
            resend: "\uc778\uc99d\uba54\uc77c \ub2e4\uc2dc \ubc1b\uae30",
            resend_description: "\uc7ac\uc778\uc99d \ubc1b\uc73c\uc2e4 \uc774\uba54\uc77c\uc744 \uc785\ub825\ud574\uc8fc\uc138\uc694.",
            send_instructions: "\uc778\uc99d\uba54\uc77c\uc774 \uc7ac\ubc1c\uc1a1\ub418\uc5c8\uc2b5\ub2c8\ub2e4.",
            send_paranoid_instructions: "If your email address exists in our database, you will receive an email with instructions about how to confirm your account in a few minutes.",
            use_after_sign_out: "\ub85c\uadf8\uc544\uc6c3 \ud6c4 \uc774\uc6a9\ud574\uc8fc\uc138\uc694."
        },
        failure: {
            already_authenticated: "\uc774\ubbf8 \ub85c\uadf8\uc778 \uc911\uc785\ub2c8\ub2e4.",
            inactive: "\uacc4\uc815\uc774 \uc544\uc9c1 \ud65c\uc131\ud654\ub418\uc9c0 \uc54a\uc558\uc2b5\ub2c8\ub2e4.",
            invalid: "\uc774\uba54\uc77c \ub610\ub294 \uc554\ud638\uac00 \uc62c\ubc14\ub974\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4.",
            invalid_token: "\uc798\ubabb\ub41c \uc778\uc99d \ud1a0\ud070 \uc785\ub2c8\ub2e4.",
            locked: "\uc774 \uacc4\uc815\uc740 \uc7a0\uae08\uc0c1\ud0dc\uc785\ub2c8\ub2e4.",
            not_found_in_database: "\uc774\uba54\uc77c \ub610\ub294 \uc554\ud638\uac00 \uc62c\ubc14\ub974\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4.",
            timeout: "\uc138\uc158\uc774 \ub9cc\ub8cc\ub418\uc5c8\uc2b5\ub2c8\ub2e4. \ub2e4\uc2dc \ub85c\uadf8\uc778 \ud574\uc8fc\uc2ed\uc2dc\uc624.",
            unauthenticated: "\ub85c\uadf8\uc778\uc774 \ud544\uc694\ud569\ub2c8\ub2e4.",
            unconfirmed: "\uc778\uc99d\ubc1b\uc9c0 \uc54a\uc740 \uacc4\uc815\uc785\ub2c8\ub2e4. \uc778\uc99d \uba54\uc77c\uc744 \ub2e4\uc2dc\ubc1b\uc73c\uc2dc\uaca0\uc2b5\ub2c8\uae4c? <a href='/users/confirmation/new'>\ub2e4\uc2dc \ubc1b\uae30</a>"
        },
        invalid_url: {
            content_html: "\uc778\uc99d\uae30\ud55c\uc774 \ub9cc\ub8cc\ub418\uac70\ub098 \uc798\ubabb\ub41c \uc811\uadfc\uc785\ub2c8\ub2e4.<br/><br/>\ub2e4\uc2dc \uc694\uccad\ud574 \ubcf4\uc2dc\uace0 \ub3d9\uc77c\ud55c \ubb38\uc81c\uac00 \uacc4\uc18d\ub418\ub294 \uacbd\uc6b0,<br/>help@userhabit.io \ub85c \ubb38\uc758 \ubd80\ud0c1\ub4dc\ub9bd\ub2c8\ub2e4.",
            title: "\uc720\ud6a8\ud558\uc9c0 \uc54a\uc740 URL\uc785\ub2c8\ub2e4."
        },
        mailer: {
            confirmation_instructions: {
                subject: "Confirmation instructions"
            },
            reset_password_instructions: {
                subject: "[Userhabit] \ube44\ubc00\ubc88\ud638 \ubcc0\uacbd \uc548\ub0b4"
            },
            unlock_instructions: {
                subject: "Unlock Instructions"
            }
        },
        messages: {
            change_to_reachable_email_for_sk: "T developers\ub97c \ud1b5\ud574 \uac00\uc785\ud558\uc2e0 \uacbd\uc6b0 \uc5f0\ub77d \uac00\ub2a5\ud55c \uc774\uba54\uc77c \uc8fc\uc18c\ub85c \ubcc0\uacbd\ud574\uc8fc\uc138\uc694.",
            not_required_to_change_password: "\ube44\ubc00\ubc88\ud638\ub97c \ubc14\uafb8\uace0 \uc2f6\uc9c0 \uc54a\uc73c\uba74 \ube44\uc6cc\ub450\uc2dc\uba74 \ub429\ub2c8\ub2e4.",
            require_current_password: "\uacc4\uc815 \uc815\ubcf4\ub97c \uc218\uc815\ud558\ub824\uba74 \ud604\uc7ac \ud328\uc2a4\uc6cc\ub4dc\ub97c \uc785\ub825\ud558\uc154\uc57c \ud569\ub2c8\ub2e4."
        },
        omniauth_callbacks: {
            failure: 'Could not authenticate you from %{kind} because "%{reason}".',
            success: "Successfully authenticated from %{kind} account."
        },
        passwords: {
            danger: "\ucd5c\uc18c 8\uc790 \uc774\uc0c1\uc73c\ub85c \ud574\uc8fc\uc138\uc694.",
            description: "\uac00\uc785\ud558\uc2e4 \ub54c \uc0ac\uc6a9\ud55c \uc774\uba54\uc77c\uc744 \uc785\ub825\ud574\uc8fc\uc138\uc694.",
            expired_token: "\uc778\uc99d \uc720\ud6a8\uae30\uac04\uc774 \ub9cc\ub8cc\ub418\uc5c8\uc2b5\ub2c8\ub2e4. \uc778\uc99d\uba54\uc77c\uc744 \ub2e4\uc2dc \uc694\uccad\ud574\uc8fc\uc138\uc694.",
            forgot_password: "\ube44\ubc00\ubc88\ud638\ub97c \uc78a\uc73c\uc168\ub098\uc694?",
            invalid_mail: "\ub4f1\ub85d\ub418\uc9c0 \uc54a\uc740 \uacc4\uc815\uc785\ub2c8\ub2e4.",
            invalid_token: "\uc774\ubbf8 \uc778\uc99d\ub41c \uba54\uc77c\uc785\ub2c8\ub2e4. \ub2e4\uc2dc \ub85c\uadf8\uc778\ud574\uc8fc\uc138\uc694.",
            mail_title: "\uc548\ub155\ud558\uc138\uc694 \uc564\ubc97\uc785\ub2c8\ub2e4. \ube44\ubc00\ubc88\ud638\ub97c \ubcc0\uacbd\ud558\uc2dc\uaca0\uc2b5\ub2c8\uae4c?",
            no_token: "You can't access this page without coming from a password reset email. If you do come from a password reset email, please make sure you used the full URL provided.",
            not_match: "\ube44\ubc00\ubc88\ud638\uac00 \ub2e4\ub985\ub2c8\ub2e4.",
            recover: "\ube44\ubc00\ubc88\ud638 \ucc3e\uae30",
            send_instructions: "\uba54\uc77c\ub85c \ub9c1\ud06c\uac00 \ubc1c\uc1a1\ub418\uc5c8\uc2b5\ub2c8\ub2e4.",
            send_paranoid_instructions: "If your email address exists in our database, you will receive a password recovery link at your email address in a few minutes.",
            strong: "\ubcf4\uc548\uc218\uc900 \ub192\uc74c.",
            update: "\ube44\ubc00\ubc88\ud638 \ubcc0\uacbd",
            updated: "\ube44\ubc00\ubc88\ud638\uac00 \ubcc0\uacbd\ub418\uc5c8\uc2b5\ub2c8\ub2e4.",
            updated_not_active: "\ube44\ubc00\ubc88\ud638\uac00 \ubcc0\uacbd\ub418\uc5c8\uc2b5\ub2c8\ub2e4.",
            weak: "\ubcf4\uc548\uc218\uc900 \ub0ae\uc74c. \ub300/\uc18c\ubb38\uc790, \uc22b\uc790, \ud2b9\uc218\ubb38\uc790\ub97c \ubaa8\ub450 \uc774\uc6a9\ud558\uc2dc\uba74 \ub354 \uc548\uc804\ud569\ub2c8\ub2e4."
        },
        registrations: {
            completed_resend: "\uc7ac\ubc1c\uc1a1 \uc644\ub8cc",
            description: "\uc0c8 \uacc4\uc815\uc774 \ud544\uc694\ud55c\uac00\uc694?",
            destroyed: "Bye! Your account was successfully cancelled. We hope to see you again soon.",
            edit: {
                change_locale: "\uc5b8\uc5b4\uc124\uc815",
                flash_email_invalid: "\uc785\ub825\ud558\uc2e0 \uc774\uba54\uc77c\uc774 \uc798\ubabb\ub418\uc5c8\uc2b5\ub2c8\ub2e4. \ub2e4\uc2dc \uc785\ub825\ud574\uc8fc\uc138\uc694.",
                flash_name_invalid: "\uc785\ub825\ud558\uc2e0 \uc774\ub984\uc774 \uc798\ubabb\ub418\uc5c8\uc2b5\ub2c8\ub2e4. \ub2e4\uc2dc \uc785\ub825\ud574\uc8fc\uc138\uc694.",
                flash_password_current_invalid: "\uc785\ub825\ud558\uc2e0 \ud604\uc7ac \ube44\ubc00\ubc88\ud638\uac00 \ud2c0\ub9bd\ub2c8\ub2e4. \ub2e4\uc2dc \uc785\ub825\ud574\uc8fc\uc138\uc694.",
                flash_password_invalid: "\uc785\ub825\ud558\uc2e0 \ube44\ubc00\ubc88\ud638\uac00 \uc798\ubabb\ub418\uc5c8\uc2b5\ub2c8\ub2e4. \ub2e4\uc2dc \uc785\ub825\ud574\uc8fc\uc138\uc694.",
                flash_password_re_invalid: "\uc785\ub825\ud558\uc2e0 \uc7ac\uc785\ub825 \ube44\ubc00\ubc88\ud638\uac00 \uc798\ubabb\ub418\uc5c8\uc2b5\ub2c8\ub2e4. \ub2e4\uc2dc \uc785\ub825\ud574\uc8fc\uc138\uc694.",
                flash_password_same: "\uc785\ub825\ud558\uc2e0 \ube44\ubc00\ubc88\ud638\uac00 \uae30\uc874 \ube44\ubc00\ubc88\ud638\uc640 \uac19\uc2b5\ub2c8\ub2e4. \ub2e4\uc2dc \uc785\ub825\ud574\uc8fc\uc138\uc694.",
                "output-pass": "\ube44\ubc00\ubc88\ud638 \ubcc0\uacbd\uc744 \uc6d0\ud558\uc2dc\uba74 \ud604\uc7ac \ube44\ubc00\ubc88\ud638\ub97c \uc785\ub825\ud574\uc8fc\uc138\uc694.",
                output_mail: "\uc774\uba54\uc77c\uc740 \uc544\uc774\ub514\ub85c \uc0ac\uc6a9\ub429\ub2c8\ub2e4. \ubcc0\uacbd\uc2dc \uc8fc\uc758\ud574\uc8fc\uc138\uc694.",
                output_name: "\ud68c\uc0ac\uba85 \ubcc0\uacbd\uc744 \uc6d0\ud558\uc2dc\uba74 \uc0c8\ub85c \uc785\ub825\ud574\uc8fc\uc138\uc694.",
                output_repass_completed: "\uc785\ub825\ud558\uc2e0 \ube44\ubc00\ubc88\ud638\uc640 \uac19\uc2b5\ub2c8\ub2e4.",
                output_repass_uncompleted: "\uc785\ub825\ud558\uc2e0 \ube44\ubc00\ubc88\ud638\uc640 \ub2e4\ub985\ub2c8\ub2e4.",
                price: {
                    contact_message: "<p>\ud604\uc7ac \uc720\uc800\ud574\ube57 \uc624\ud508\ubca0\ud0c0\uae30\uac04\uc785\ub2c8\ub2e4.</p><br> <p>\ubca0\ud0c0\uae30\uac04\ub3d9\uc548 <b>\ubb34\ub8cc \ud50c\ub79c</b>\uc73c\ub85c \uc11c\ube44\uc2a4\ub97c \uc0ac\uc6a9\ud558\uace0 \uacc4\uc2ed\ub2c8\ub2e4.<br> \uc0ac\uc6a9 \uc911\uc5d0 \ubd88\ud3b8\ud558\uc2e0 \uc810\uc774\ub098 \ud544\uc694\ud558\uc2e0 \uae30\ub2a5\uc5d0 \ub300\ud574 \ud53c\ub4dc\ubc31\uc744 \uc8fc\uc2dc\uba74 \uace7 \ud5a5\uc0c1\ub41c \uae30\ub2a5\uc73c\ub85c \ucc3e\uc544\ubd59\uaca0\uc2b5\ub2c8\ub2e4.</p>"
                },
                title: "\uacc4\uc815\uc815\ubcf4 \ubcc0\uacbd"
            },
            input_your_password_confirmation: "\ube44\ubc00\ubc88\ud638\ub97c \ub2e4\uc2dc \uc785\ub825\ud574\uc8fc\uc138\uc694",
            "new": "\ud68c\uc6d0\uac00\uc785",
            notice_html: "<p>userhabit\uc744 <strong>\ubb34\ub8cc</strong>\ub85c \uc0ac\uc6a9\ud574\ubcf4\uc138\uc694.</p> <p>\ub354 \ud5a5\uc0c1\ub41c \uae30\ub2a5\uc73c\ub85c \uace7 \ucc3e\uc544\ubd59\uaca0\uc2b5\ub2c8\ub2e4!</p>\n",
            output_email_blank: "",
            output_email_completed: "\uc88b\uc740 \uc18c\uc2dd\ub9cc \ubcf4\ub0b4\ub4dc\ub9b4\uac8c\uc694.",
            output_email_duplicate: "\uc911\ubcf5\ub41c \uc774\uba54\uc77c\uc785\ub2c8\ub2e4.",
            output_email_uncompleted: "\ud615\uc2dd\uc774 \uc62c\ubc14\ub974\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4.",
            output_name_blank: "\ud68c\uc0ac\uba85\uc744 \uc785\ub825\ud558\uc138\uc694.",
            output_password_blank: "\ube44\ubc00\ubc88\ud638\ub97c \uc785\ub825\ud558\uc138\uc694.",
            output_password_capital: "\ub300\ubb38\uc790 \ud3ec\ud568",
            output_password_lower: "\uc18c\ubb38\uc790 \ud3ec\ud568",
            output_password_minimum: "8\uc790\ub9ac \uc774\uc0c1",
            output_password_number: "\uc22b\uc790 \ud3ec\ud568",
            output_password_special: "\ud2b9\uc218\ubb38\uc790 \ud3ec\ud568",
            privacy: "\uac1c\uc778\uc815\ubcf4\ucde8\uae09\ubc29\uce68",
            signed_up: "\uacc4\uc815\uc774 \uc131\uacf5\uc801\uc73c\ub85c \ub4f1\ub85d\ub418\uc5c8\uc2b5\ub2c8\ub2e4.",
            signed_up_but_inactive: "You have signed up successfully. However, we could not sign you in because your account is not yet activated.",
            signed_up_but_locked: "You have signed up successfully. However, we could not sign you in because your account is locked.",
            signed_up_but_unconfirmed: "",
            telephone: "\uc804\ud654\ubc88\ud638",
            term: "\uc774\uc6a9\uc57d\uad00",
            term_message_html: "<a href='/ko/terms' target='_blank'>\uc774\uc6a9\uc57d\uad00</a>\uacfc <a href='/ko/privacy' target='_blank'>\uac1c\uc778\uc815\ubcf4\ucde8\uae09\ubc29\uce68</a>\uc5d0 \ub3d9\uc758\ud569\ub2c8\ub2e4.",
            update: "\uacc4\uc815 \uc815\ubcf4 \ubcc0\uacbd",
            update_needs_confirmation: "You updated your account successfully, but we need to verify your new email address. Please check your email and click on the confirm link to finalize confirming your new email address.",
            updated: "\uc131\uacf5\uc801\uc73c\ub85c \ubcc0\uacbd\ub418\uc5c8\uc2b5\ub2c8\ub2e4.",
            welcome_title_html: "\uc720\uc800\ud574\ube57\uc744 <u>20\uc77c\uac04 \ubb34\ub8cc</u>\ub85c \uccb4\ud5d8\ud574\ubcf4\uc138\uc694!"
        },
        sessions: {
            description: "\uc774\ubbf8 \uacc4\uc815\uc774 \uc788\uc73c\uc2e0\uac00\uc694?",
            input_your_password: "\ube44\ubc00\ubc88\ud638\ub97c \uc785\ub825\ud574\uc8fc\uc138\uc694.",
            remember: "\ub85c\uadf8\uc778 \uc0c1\ud0dc \uc720\uc9c0",
            save_email: "\uc774\uba54\uc77c \uc800\uc7a5",
            sign_in: "\ub85c\uadf8\uc778",
            sign_out: "\ub85c\uadf8\uc544\uc6c3",
            signed_in: "\ub85c\uadf8\uc778 \ub418\uc5c8\uc2b5\ub2c8\ub2e4.",
            signed_out: "\ub85c\uadf8\uc544\uc6c3 \ub418\uc5c8\uc2b5\ub2c8\ub2e4.",
            tdev_sign_in: "T developer\ub85c \ub85c\uadf8\uc778"
        },
        support: {
            contact_us: "\ubb38\uc758\ud558\uae30",
            description: "\ubb38\uc81c\uac00 \uc788\uc73c\uc2e0\uac00\uc694?"
        },
        unlocks: {
            send_instructions: "You will receive an email with instructions about how to unlock your account in a few minutes.",
            send_paranoid_instructions: "If your account exists, you will receive an email with instructions about how to unlock it in a few minutes.",
            unlocked: "Your account has been unlocked successfully. Please sign in to continue."
        }
    },
    edit_account_modal: {
        apikeys_tab_title: "\uacc4\uc815\uc774 \ubcf4\uc720\ud558\uace0 \uc788\ub294 \uc571\uc758 API \ud0a4\ub97c \uad00\ub9ac\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.",
        base_app_empty: "\uc544\uc9c1 \uc0dd\uc131\ub41c \uc571\uc774 \uc5c6\uc2b5\ub2c8\ub2e4."
    },
    errors: {
        format: "%{message} (%{attribute})",
        messages: {
            accepted: "\uc57d\uad00\uc5d0 \ub3d9\uc758\ud558\uc9c0 \uc54a\uc558\uc2b5\ub2c8\ub2e4.",
            already_confirmed: "\uc774\ubbf8 \ud655\uc778\ub418\uc5c8\uc2b5\ub2c8\ub2e4, \ub2e4\uc2dc \ub85c\uadf8\uc778 \ud574 \uc8fc\uc2ed\uc2dc\uc624",
            blank: "\uac12\uc774 \uc804\uc1a1\ub418\uc9c0 \uc54a\uc558\uc2b5\ub2c8\ub2e4.",
            confirmation: "\ud655\uc778\uac12\uc774 \uac19\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4.",
            empty: "\uc5d0 \ub0b4\uc6a9\uc744 \uc785\ub825\ud574 \uc8fc\uc138\uc694",
            equal_to: "\uac12\uc774 %{count}\uc640 \ubc18\ub4dc\uc2dc \uac19\uc544\uc57c \ud569\ub2c8\ub2e4.",
            even: "\uac12\uc774 \uc9dd\uc218\uc5ec\uc57c \ud569\ub2c8\ub2e4.",
            exclusion: "\ud5c8\uc6a9\ub418\uc9c0 \uc54a\ub294 \ud615\ud0dc\uc758 \uac12\uc785\ub2c8\ub2e4.",
            expired: "\uac00(\uc774) \ub9cc\ub8cc\ub418\uc5c8\uc2b5\ub2c8\ub2e4. \uc0c8\ub85c \uc694\uccad\ud574 \uc8fc\uc2ed\uc2dc\uc624",
            greater_than: "\uac12\uc774 %{count}\ubcf4\ub2e4 \ucee4\uc57c \ud569\ub2c8\ub2e4.",
            greater_than_or_equal_to: "\uac12\uc774 %{count}\ubcf4\ub2e4 \ud06c\uac70\ub098 \uac19\uc544\uc57c \ud569\ub2c8\ub2e4.",
            inclusion: "\ud5c8\uc6a9\ub418\uc9c0 \uc54a\ub294 \ud615\ud0dc\uc758 \uac12\uc785\ub2c8\ub2e4.",
            invalid: "\ud5c8\uc6a9\ub418\uc9c0 \uc54a\ub294 \ud615\ud0dc\uc758 \uac12\uc785\ub2c8\ub2e4.",
            less_than: "\uac12\uc774 %{count}\ubcf4\ub2e4 \uc791\uc544\uc57c \ud569\ub2c8\ub2e4.",
            less_than_or_equal_to: "\uac12\uc774 %{count}\ubcf4\ub2e4 \uc791\uac70\ub098 \uac19\uc544\uc57c \ud569\ub2c8\ub2e4.",
            name_blank: "\uc774\ub984\uc774 \uc785\ub825\ub418\uc9c0 \uc54a\uc558\uc2b5\ub2c8\ub2e4.",
            not_a_number: "\uc22b\uc790\ub97c \uc785\ub825\ud574\uc8fc\uc154\uc57c \ud569\ub2c8\ub2e4.",
            not_an_integer: "\uc5d0 \uc815\uc218\ub97c \uc785\ub825\ud574 \uc8fc\uc138\uc694",
            not_found: "\ub97c(\uc744) \ucc3e\uc744 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4",
            not_locked: "\uac00(\uc774) \uc7a0\uae30\uc9c0 \uc54a\uc558\uc2b5\ub2c8\ub2e4",
            not_saved: {
                one: "1\uac1c\uc758 \uc5d0\ub7ec\uac00 \ubc1c\uc0dd\ud574\uc11c %{resource}\ub97c(\uc744) \uc800\uc7a5\ud560 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4:",
                other: "%{count}\uac1c\uc758 \uc5d0\ub7ec\uac00 \ubc1c\uc0dd\ud574\uc11c %{resource}\ub97c(\uc744) \uc800\uc7a5\ud560 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4:"
            },
            odd: "\uac12\uc774 \ud640\uc218\uc5ec\uc57c \ud569\ub2c8\ub2e4.",
            record_invalid: "\ub370\uc774\ud130 \uac80\uc99d\uc5d0 \uc2e4\ud328\ud558\uc600\uc2b5\ub2c8\ub2e4. %{errors}",
            taken: "\uc774\ubbf8 \uc0ac\uc6a9\uc911\uc778 \uc774\uba54\uc77c\uc785\ub2c8\ub2e4. \ub2e4\ub978 \uc774\uba54\uc77c\uc744 \uc785\ub825\ud574\uc8fc\uc138\uc694.",
            too_long: "\uac12\uc774 \ub108\ubb34 \uae41\ub2c8\ub2e4. %{count}\ubcf4\ub2e4 \uc9e7\uc544\uc57c \ud569\ub2c8\ub2e4.",
            too_short: "\uac12\uc774 \ub108\ubb34 \uc9e7\uc2b5\ub2c8\ub2e4 %{count}\ubcf4\ub2e4 \uae38\uc5b4\uc57c \ud569\ub2c8\ub2e4.",
            wrong_length: "\ud5c8\uc6a9\ub418\uc9c0 \uc54a\ub294 \uae38\uc774\uc785\ub2c8\ub2e4. \uae38\uc774\uac00 %{count}\uc5ec\uc57c \ud569\ub2c8\ub2e4."
        },
        template: {
            body: "\ub2e4\uc74c \ud56d\ubaa9\uc5d0 \ubb38\uc81c\uac00 \ubc1c\uacac\ub418\uc5c8\uc2b5\ub2c8\ub2e4:",
            header: {
                one: "\uc624\ub958\uac00 \ubc1c\uc0dd\ud574 %{model}\ub97c \uc800\uc7a5 \ud560 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4",
                other: "%{count}\uac1c\uc758 \uc624\ub958\uac00 \ubc1c\uc0dd\ud574 %{model}\ub97c \uc800\uc7a5 \ud560 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4"
            },
            models: {
                ability: {
                    attributes: null
                },
                account: {
                    attributes: null
                },
                app: {
                    attributes: null
                },
                app_view: {
                    attributes: null
                },
                app_view_analysis: {
                    attributes: null
                },
                campaign: {
                    attributes: null
                },
                checkpoint: {
                    attributes: null
                },
                checkpoint_pass: {
                    attributes: null
                },
                checkpoint_pass_count_reference: {
                    attributes: null
                },
                checkpoint_pass_log: {
                    attributes: null
                },
                checkpoint_relation: {
                    attributes: null
                },
                checkpoint_type: {
                    attributes: null
                },
                crash: {
                    attributes: null
                },
                device_model: {
                    attributes: null
                },
                event: {
                    attributes: null
                },
                head_app_view: {
                    attributes: null
                },
                role: {
                    attributes: null
                },
                scenario: {
                    attributes: null
                },
                scenario_path: {
                    attributes: null
                },
                scenario_progress: {
                    attributes: null
                },
                survey: {
                    attributes: null
                },
                survey_choice: {
                    attributes: null
                },
                survey_daily_counter: {
                    attributes: null
                },
                survey_exposure: {
                    attributes: null
                },
                survey_result: {
                    attributes: null
                },
                survey_type: {
                    attributes: null
                },
                tester: {
                    attributes: null
                },
                tester_activity: {
                    attributes: null
                },
                tester_device: {
                    attributes: null
                },
                tester_meta_data: {
                    attributes: null
                },
                tester_meta_data_type: {
                    attributes: null
                },
                tester_session: {
                    attributes: null
                },
                user: {
                    attributes: null
                },
                version: {
                    attributes: null
                }
            }
        }
    },
    filter: {
        gfilter: {
            all: "\uc804\uccb4",
            country: "\uad6d\uac00",
            date_range: "\uae30\uac04",
            no_data: "\ub370\uc774\ud130 \uc5c6\uc74c",
            reset: "\ucd08\uae30\ud654",
            select: "\uc801\uc6a9",
            select_count: "%{count}\uac1c \uc120\ud0dd",
            session_count: "\uc138\uc158\uc218 %{session}",
            under_100: "100 \ubbf8\ub9cc",
            user_type: "\uc0ac\uc6a9\uc790 \ud544\ud130",
            version: "\uc571\ubc84\uc804"
        }
    },
    helpers: {
        page_entries_info: {
            more_pages: {
                display_entries: "%{total}\uac1c \uc911 %{first}~%{last}\uac1c"
            },
            one_page: {
                display_entries: {
                    one: "1\uac1c \uc911 1\uac1c",
                    other: "%{count}\uac1c \uc911 1~%{count}\uac1c",
                    zero: "\ub370\uc774\ud130 \uc5c6\uc74c"
                }
            }
        },
        select: {
            prompt: "\uc120\ud0dd\ud574\uc8fc\uc138\uc694"
        },
        submit: {
            create: "\ub4f1\ub85d",
            submit: "\uc81c\ucd9c",
            update: "\uac31\uc2e0"
        }
    },
    i18n: {
        plural: {
            keys: ["other"],
            rule: {}
        }
    },
    language_code: {
        ar: "AR-\uc544\ub78d\uc5b4",
        cs: "CS-\uccb4\ucf54\uc5b4",
        da: "DA-\ub374\ub9c8\ud06c\uc5b4",
        de: "DE-\ub3c5\uc77c\uc5b4",
        el: "EL-\uadf8\ub9ac\uc2a4\uc5b4",
        en: "EN-\uc601\uc5b4",
        es: "ES-\uc2a4\ud398\uc778\uc5b4",
        fi: "FI-\ud540\ub780\ub4dc\uc5b4",
        fr: "FR-\ud504\ub791\uc2a4\uc5b4",
        he: "HE-\ud788\ube0c\ub9ac\uc5b4",
        hu: "HU-\ud5dd\uac00\ub9ac\uc5b4",
        it: "IT-\uc774\ud0c8\ub9ac\uc544\uc5b4",
        ja: "JA-\uc77c\ubcf8\uc5b4",
        ko: "KO-\ud55c\uad6d\uc5b4",
        nb: "NB-\ub178\ub974\uc6e8\uc774\uc5b4(\ubcf5\ub9d0)",
        nl: "NL-\ub124\ub35c\ub780\ub4dc\uc5b4",
        nn: "NN-\ub178\ub974\uc6e8\uc774\uc5b4(\ub2c8\ub178\ub974\uc2a4\ud06c)",
        pt: "PT-\ud3ec\ub974\ud22c\uac08\uc5b4",
        ru: "RU-\ub7ec\uc2dc\uc544\uc5b4",
        sk: "SK-\uc2ac\ub85c\ubc14\ud0a4\uc544\uc5b4",
        sl: "SL-\uc2ac\ub85c\ubca0\ub2c8\uc544\uc5b4",
        sv: "SV-\uc2a4\uc6e8\ub374\uc5b4",
        tr: "TR-\ud130\ud0a4\uc5b4",
        zh: "ZH-\uc911\uad6d\uc5b4"
    },
    mapping: {
        campaign_status: {
            launched: "\uc2e4\ud589",
            paused: "\uc77c\uc2dc\uc815\uc9c0",
            preparing: "\uc900\ube44",
            terminated: "\uc885\ub8cc"
        },
        checkpoint_type: {
            primitive: "\ud2b9\uc815 \uc9c0\uc810 \ud1b5\uacfc",
            session_count: "\uc138\uc158 \ud69f\uc218",
            session_length: "\uc138\uc158 \uae38\uc774"
        },
        survey_type: {
            likert_scale: "\ub9ac\ucee4\ud2b8 \ucc99\ub3c4",
            objective: "\uac1d\uad00\uc2dd",
            objective_multiple: "\uac1d\uad00\uc2dd(\ubcf5\uc218\uc120\ud0dd)",
            objective_multiple_with_etc: "\uac1d\uad00\uc2dd(\ubcf5\uc218\uc120\ud0dd, \uae30\ud0c0)",
            objective_with_etc: "\uac1d\uad00\uc2dd(\uae30\ud0c0)",
            subjective: "\uc8fc\uad00\uc2dd"
        }
    },
    messages: {
        all_screen_filter_limit: "\uc9c0\ud45c\uc120\ud0dd\uc740 \ucd5c\ub300 3\uac1c\uae4c\uc9c0\ub9cc \uc120\ud0dd \uac00\ub2a5\ud569\ub2c8\ub2e4.",
        app_delete_success: "\uc571\uc774 \uc815\uc0c1\uc801\uc73c\ub85c \uc0ad\uc81c\ub418\uc5c8\uc2b5\ub2c8\ub2e4.",
        confirm_exit: "\ud398\uc774\uc9c0\ub97c \ub098\uac00\uba74 \uc791\uc131 \uc911\uc774\ub358 \ub0b4\uc6a9\uc774 \uc0ac\ub77c\uc9d1\ub2c8\ub2e4. \uadf8\ub798\ub3c4 \uc9c4\ud589\ud558\uc2dc\uaca0\uc2b5\ub2c8\uae4c?",
        created: "%{model}\uc774(\uac00) \uc0dd\uc131\ub418\uc5c8\uc2b5\ub2c8\ub2e4.",
        currently_in_preparation: "\ud604\uc7ac \uc900\ube44\uc911\uc785\ub2c8\ub2e4.",
        data_not_found_html: "<h1>\uc544\uc9c1 \uc218\uc9d1\ub41c \ub370\uc774\ud130\uac00 \uc5c6\uc2b5\ub2c8\ub2e4.</h1><p>SDK\uac00 \uc81c\ub300\ub85c \ud1b5\ud569\ub418\uc9c0 \uc54a\uc558\uac70\ub098, SDK\uac00 \ud1b5\ud569\ub41c \uc571\uc774 \ubc30\ud3ec\ub418\uc9c0 \uc54a\uc740 \uc0c1\ud0dc\uc785\ub2c8\ub2e4.</p> <p>\uac00\uc774\ub4dc\ub97c \ucc38\uace0\ud574 SDK\ucf54\ub4dc\ub97c \uc571\uc5d0 \uc0bd\uc785\ud558\uac70\ub098<br> \uad81\uae08\ud55c \uc810\uc774 \uc788\uc73c\uba74 \ubb38\uc758\uc8fc\uc2dc\uae30 \ubc14\ub78d\ub2c8\ub2e4.</p><br><p> <a href='%{sdk_guide}' target='_blank'>SDK \uc124\uce58 \uac00\uc774\ub4dc</a> | <a href='%{contact_us_path}' target='_blank'>\ubb38\uc758\ud558\uae30</a>",
        data_not_loaded_html: "<h1>\ub370\uc774\ud130\ub97c \uac00\uc838\uc624\ub294 \ub3c4\uc911 \uc624\ub958\uac00 \ubc1c\uc0dd\ud558\uc600\uc2b5\ub2c8\ub2e4.</h1><p>\uacc4\uc18d\ud574\uc11c \uac19\uc740 \ubb38\uc81c\uac00 \ubc18\ubcf5\ud558\uc5ec \ubc1c\uc0dd\ud558\uba74 \uad00\ub9ac\uc790\uc5d0\uac8c \uc5f0\ub77d \ubd80\ud0c1\ub4dc\ub9bd\ub2c8\ub2e4.</p>",
        need_signin: "\uc774 \ud398\uc774\uc9c0\ub97c \ubcf4\ub824\uba74 \ub85c\uadf8\uc778\uc774 \ud544\uc694\ud569\ub2c8\ub2e4.",
        not_authorized: "\ud5c8\uc6a9\ub418\uc9c0 \uc54a\uc740 \uc9c4\ud589\uc785\ub2c8\ub2e4.",
        notshowme: "\uc774 \uc54c\ub9bc \ub2e4\uc2dc \ud45c\uc2dc\ud558\uc9c0 \uc54a\uae30",
        notshowmeattoday: "\ud558\ub8e8 \ub3d9\uc548 \ud45c\uc2dc\ud558\uc9c0 \uc54a\uae30",
        send_fail: "\uba54\uc138\uc9c0\ub97c \ubcf4\ub0b4\uc9c0 \ubabb\ud588\uc2b5\ub2c8\ub2e4. \ub2e4\uc2dc \uc2dc\ub3c4\ud574 \uc8fc\uc138\uc694.",
        send_success: "\uba54\uc2dc\uc9c0\ub97c \uc131\uacf5\uc801\uc73c\ub85c \ubcf4\ub0c8\uc2b5\ub2c8\ub2e4",
        send_us_feedback: "\uad00\ub9ac\uc790\uc5d0\uac8c \ubb38\uc758\ud569\ub2c8\ub2e4",
        status_change: "%{status} \uc0c1\ud0dc\ub85c \ubcc0\uacbd\ub418\uc5c8\uc2b5\ub2c8\ub2e4."
    },
    number: {
        currency: {
            format: {
                delimiter: ",",
                format: "%n%u",
                precision: 0,
                separator: ".",
                significant: !1,
                strip_insignificant_zeros: !1,
                unit: "\uc6d0"
            }
        },
        format: {
            delimiter: ",",
            precision: 3,
            separator: ".",
            significant: !1,
            strip_insignificant_zeros: !1
        },
        human: {
            decimal_units: {
                format: "%n%u",
                units: {
                    billion: "\uc2ed\uc5b5",
                    million: "\ubc31\ub9cc",
                    quadrillion: "\uacbd",
                    thousand: "\ucc9c",
                    trillion: "\uc870",
                    unit: ""
                }
            },
            format: {
                delimiter: "",
                precision: 3,
                significant: !0,
                strip_insignificant_zeros: !0
            },
            storage_units: {
                format: "%n%u",
                units: {
                    "byte": "\ubc14\uc774\ud2b8",
                    gb: "\uae30\uac00\ubc14\uc774\ud2b8",
                    kb: "\ud0ac\ub85c\ubc14\uc774\ud2b8",
                    mb: "\uba54\uac00\ubc14\uc774\ud2b8",
                    tb: "\ud14c\ub77c\ubc14\uc774\ud2b8"
                }
            }
        },
        percentage: {
            format: {
                delimiter: ""
            }
        },
        precision: {
            format: {
                delimiter: ""
            }
        }
    },
    simple_form: {
        error_notification: {
            default_message: ""
        },
        no: "\uc544\ub2c8\uc624",
        required: {
            mark: "*"
        },
        yes: "\uc608"
    },
    "static": {
        day: "\uc77c\uac04",
        month: "\uc6d4\uac04",
        week: "\uc8fc\uac04"
    },
    support: {
        array: {
            last_word_connector: ", ",
            two_words_connector: "\uc640(\uacfc) ",
            words_connector: ", "
        }
    },
    time: {
        am: "\uc624\uc804",
        formats: {
            "default": "%Y/%m/%d %H:%M:%S",
            "long": "%Y\ub144 %m\uc6d4 %d\uc77c, %H\uc2dc %M\ubd84 %S\ucd08 %Z",
            realtime_report: "%Y\ub144 %m\uc6d4 %d\uc77c %H\uc2dc",
            "short": "%y/%m/%d %H:%M"
        },
        pm: "\uc624\ud6c4"
    },
    tooltips: {
        base_apps: {
            date_alert: "\uae30\uac04\uc774 \ub9cc\ub8cc\ub418\uba74 \ub370\uc774\ud130\uc758 \uc870\ud68c\uac00 \uc81c\ud55c\ub429\ub2c8\ub2e4 \ud50c\ub79c\uc744 \uc5c5\uadf8\ub808\uc774\ub4dc \ud574\uc8fc\uc138\uc694.",
            date_alert_start_pack: "Starter Pack \uae30\uac04\uc774 \uc885\ub8cc\ub418\uba74 Startup \ud50c\ub79c\uc73c\ub85c \uc790\ub3d9 \uc5f0\uc7a5\ub429\ub2c8\ub2e4.",
            plan_alert: "\ubb34\ub8cc \uccb4\ud5d8\uae30\uac04\uc774 \uc9c0\ub098 \ud604\uc7ac \uc0ac\uc6a9\uc911\uc778 \ud50c\ub79c\uc774 \uc5c6\uc2b5\ub2c8\ub2e4 \ud50c\ub79c\uc744 \uad6c\ub9e4\ud574 \uc8fc\uc138\uc694.",
            sv_alert: "\uae30\ubcf8 \uc0ac\uc6a9\ub7c9\uc744 \ubaa8\ub450 \uc18c\uc9c4\ud558\uc600\uc2b5\ub2c8\ub2e4. \ucd94\uac00 \uc2a4\ud06c\ub9b0\ubdf0 \uc0ac\uc6a9\ub7c9\uc5d0 \ub530\ub77c \ucd94\uac00 \uacfc\uae08\ub429\ub2c8\ub2e4."
        },
        core: {
            flow_analysis: "\ub2e4\ub978 \ud654\uba74\uc744 \uac70\uce58\uc9c0 \uc54a\uace0 \ubc14\ub85c \uc774\ub3d9\ud558\ub294 \ud55c \ub2e8\uacc4(\uc9c1\ud56d)\uc758 \uacbd\ub85c\ub97c \uc0c1\uc138\ud558\uac8c \ubd84\uc11d\ud574 \ubcfc \uc218 \uc788\uc2b5\ub2c8\ub2e4.<br/>\uc218\ub9ce\uc740 \ud55c \ub2e8\uacc4 \uacbd\ub85c\uc911\uc5d0 \ub9ce\uc774 \uc9c0\ub098\uac00\uac70\ub098 \ubd90\ube44\ub294 \uacbd\ub85c\ub97c \uc54c \uc218 \uc788\uc2b5\ub2c8\ub2e4.",
            plan_upgrade: "\ud604\uc7ac \uc774\uc6a9\uc911\uc778 \ud50c\ub79c\uc73c\ub85c \uad00\ub9ac\ud560 \uc218 \uc788\ub294 \uc571 \uc218 \uc81c\ud55c\uc744 \ud45c\uc2dc\ud569\ub2c8\ub2e4. \uc81c\ud55c\uc744 \ub298\ub9ac\ub824\uba74 \ud50c\ub79c\uc744 \uc5c5\uadf8\ub808\uc774\ub4dc \ud558\uc138\uc694."
        },
        crash_analytics: {
            main_indicators: "\uc120\ud0dd\ub41c \uae30\uac04 \ub0b4 \ub204\uc801 \ud569\uacc4"
        },
        dashboard: {
            action_activity: "\uc571 \ub0b4\uc5d0\uc11c \uc0ac\uc6a9\uc790\uac00 \uc5bc\ub9c8\ub098 \ud65c\ubc1c\ud558\uac8c \ud65c\ub3d9\ud558\ub294\uc9c0\uc5d0 \ub300\ud55c \uc9c0\ud45c\uc785\ub2c8\ub2e4.",
            actions: "\uc0ac\uc6a9\uc790\uac00 \ud654\uba74 \ub0b4\uc5d0\uc11c \ud589\ub3d9\ud558\ub294 \uc561\uc158\uc5d0 \ub300\ud55c \uac83\uc744 \ub098\ud0c0\ub0b4\ub294 \uc9c0\ud45c",
            app_activity: "\uc571\uc5d0 \uc5bc\ub9c8\ub098 \ub9ce\uc740 \uc0ac\uc6a9\uc790\uac00 \uc720\uc785\ub418\ub294\uc9c0\uc5d0 \ub300\ud55c \uc9c0\ud45c\ub97c \uc81c\uacf5\ud569\ub2c8\ub2e4.",
            avg: {
                action: "\ud0ed, \uc2a4\uc640\uc774\ud504, \ub354\ube14\ud0ed, \ub871\ud504\ub808\uc2a4\uc640 \uac19\uc740 \uc561\uc158\uc744 \uad6c\ubd84\ud558\uc5ec \ud45c\uc2dc\ud558\uba70, \ud55c \ubc88 \ubc29\ubb38\ud560 \ub54c\ub9c8\ub2e4 \uba87 \ubc88\uc774\ub098 \uc561\uc158\ud588\ub294\uc9c0\uc5d0 \ub300\ud574 \uac01\uac01 \ud45c\uc2dc\ud569\ub2c8\ub2e4.",
                action_bottom: "\ucd1d \uc561\uc158\uc218 / \ucd1d \uc138\uc158\uc218",
                duration: "\ud574\ub2f9 \uc77c\uc790\uc5d0 \ud55c \ubc88 \ubc29\ubb38\ud560 \ub54c\ub9c8\ub2e4 \uc5bc\ub9c8\ub098 \uba38\ubb34\ub974\ub294\uc9c0\uc5d0 \ub300\ud55c \uc9c0\ud45c",
                duration_bottom: "\ucd1d \uccb4\ub958\uc2dc\uac04 / \ucd1d \uc138\uc158\uc218",
                screen_view: "\ud55c \ubc88 \ubc29\ubb38\ud560 \ub54c\ub9c8\ub2e4 \uba87 \uac1c\uc758 \ud654\uba74\uc744 \ud655\uc778\ud558\ub294\uc9c0\uc5d0 \ub300\ud55c \uc9c0\ud45c",
                screen_view_bottom: "\ucd1d \uc2a4\ud06c\ub9b0\ubdf0 / \ucd1d \uc138\uc158\uc218",
                session: "\ud574\ub2f9 \uc77c\uc790\uc5d0 \ud55c \uc0ac\uc6a9\uc790\ub2f9 \uc5bc\ub9c8\ub098 \ubc29\ubb38\ud558\ub294\uc9c0\uc5d0 \ub300\ud55c \uc9c0\ud45c",
                session_bottom: "\ucd1d \uc138\uc158\uc218 / \ucd1d \uc0ac\uc6a9\uc790\uc218",
                unique_view: "\ud55c \ubc88 \ubc29\ubb38\ud560 \ub54c\ub9c8\ub2e4 \uba87 \uac1c\uc758 \ud654\uba74\uc744 \ud655\uc778\ud558\ub294\uc9c0\uc5d0 \ub300\ud55c \uc9c0\ud45c(\uc911\ubcf5 \uc2a4\ud06c\ub9b0\ubdf0 \uc81c\uac70)"
            },
            avg_actions: "\ud0ed, \uc2a4\uc640\uc774\ud504, \ub354\ube14\ud0ed, \ub871\ud504\ub808\uc2a4\uc640 \uac19\uc740 \uc561\uc158\uc744 \uad6c\ubd84\ud558\uc5ec \ud45c\uc2dc\ud558\uba70, \ud55c \ubc88 \ubc29\ubb38\ud560 \ub54c\ub9c8\ub2e4 \uba87 \ubc88\uc774\ub098 \uc561\uc158\ud588\ub294\uc9c0\uc5d0 \ub300\ud574 \uac01\uac01 \ud45c\uc2dc\ud569\ub2c8\ub2e4.",
            avg_duration: "\ud55c \ubc88 \ubc29\ubb38\ud560 \ub54c\ub9c8\ub2e4 \uc5bc\ub9c8\ub098 \uba38\ubb34\ub974\ub294\uc9c0\uc5d0 \ub300\ud55c \uc9c0\ud45c",
            avg_move_distribution: "\uc571\uc5d0 \ud55c \ubc88 \uc811\uc18d\ud574\uc11c \uba87 \uac1c\uc758 \ud654\uba74\uc744 \uc774\ub3d9\ud588\ub294\uc9c0\uc5d0 \ub300\ud55c \ubd84\ud3ec\ub3c4\ub97c \ud45c\uc2dc\ud569\ub2c8\ub2e4.",
            avg_screen_view: "\ud55c \ubc88 \ubc29\ubb38\ud560 \ub54c\ub9c8\ub2e4 \uba87 \uac1c\uc758 \ud654\uba74\uc744 \ud655\uc778\ud558\ub294\uc9c0\uc5d0 \ub300\ud55c \uc9c0\ud45c",
            avg_session: "\ud55c \uc0ac\uc6a9\uc790\uac00 \uba87 \ubc88\uc774\ub098 \ubc29\ubb38\ud558\ub294\uc9c0\uc5d0 \ub300\ud55c \uc9c0\ud45c",
            avg_unique_view: "\ud55c \ubc88 \ubc29\ubb38\ud560 \ub54c\ub9c8\ub2e4 \uba87 \uac1c\uc758 \ud654\uba74\uc744 \ud655\uc778\ud558\ub294\uc9c0\uc5d0 \ub300\ud55c \uc9c0\ud45c(\uc911\ubcf5\ud654\uba74 \uc81c\uac70)",
            country_info: "\uc571\uc744 \uc0ac\uc6a9\ud558\ub294 \uc0ac\uc6a9\uc790\uc758 \uad6d\uac00\uc815\ubcf4\uc5d0 \ub300\ud55c \ud1b5\uacc4 \uc815\ubcf4\ub97c \ubcf4\uc5ec\uc90d\ub2c8\ub2e4.",
            crash_count: "\ud06c\ub798\uc2dc\uac00 \ubc1c\uc0dd\ud55c \uc218",
            crash_ratio: "\ud06c\ub798\uc2dc\uac00 \ubc1c\uc0dd\ud55c \uc218 / \uc804\uccb4 \uc138\uc158\uc218",
            crashes: "\ubb38\uc81c\uac00 \ubc1c\uc0dd\ud558\uc5ec \ube44\uc815\uc0c1\uc801\uc73c\ub85c \uc885\ub8cc\ub418\ub294 \uac83\uc744 \ub098\ud0c0\ub0b4\ub294 \uc9c0\ud45c",
            distribution_graph: "\ubd84\ud3ec\ucc28\ud2b8\ub294 \uc77c\uc8fc\uc77c \ub2e8\uc704\ub85c \ub370\uc774\ud130\uac00 \uc9d1\uacc4\ub418\uba70 \uc8fc\uac04 \ud544\ud130\uac00 \uc801\uc6a9\ub429\ub2c8\ub2e4.",
            flow_graph: "\uc138\uc158\ub9c8\ub2e4 \ud654\uba74 \uc774\ub3d9\uc744 \uba87 \ubc88\uc774\ub098 \ud588\ub294\uc9c0 \ubd84\ud3ec\ub97c \ud45c\uc2dc\ud569\ub2c8\ub2e4.",
            major_daily_indicator: "\uc120\ud0dd\ud55c \ub0a0\uc9dc \ud544\ud130\uc758 \ucd5c\uadfc\uc77c\uc790\ub97c \uae30\uc900\uc73c\ub85c \ud558\ub8e8\ub2f9 \uc571\uc758 \uc9c0\ud45c\ub97c \ud45c\uc2dc\ud569\ub2c8\ub2e4.",
            max_flow: "\uc571\uc5d0 \ud55c \ubc88 \uc811\uc18d\ud574\uc11c \uac00\uc7a5 \uae34 \uacbd\ub85c\ub97c \uc774\ub3d9\ud55c \uc138\uc158\uc758 \uac1c\uc218\ub97c \ud45c\uc2dc\ud569\ub2c8\ub2e4.",
            min_flow: "\uc571\uc5d0 \ud55c \ubc88 \uc811\uc18d\ud574\uc11c \uac00\uc7a5 \uc9e7\uc740 \uacbd\ub85c\ub97c \uc774\ub3d9\ud55c \uc138\uc158\uc758 \uac1c\uc218\ub97c \ud45c\uc2dc\ud569\ub2c8\ub2e4.",
            new_user: "\uc2e0\uaddc \uc0ac\uc6a9\uc790\uc640 \uc7ac\ubc29\ubb38 \uc0ac\uc6a9\uc790\ub97c \uad6c\ubd84\ud558\uc5ec \ud655\uc778\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.",
            newreturn_user: "\uc2e0\uaddc \uc0ac\uc6a9\uc790\uc640 \uc7ac\ubc29\ubb38 \uc0ac\uc6a9\uc790\ub97c \uad6c\ubd84\ud558\uc5ec \ud655\uc778\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.",
            realtime_indicator: "\uc624\ub298\uc5d0 \ub300\ud55c \uc9c0\ud45c\ub97c \uc2e4\uc2dc\uac04\uc73c\ub85c \uc81c\uacf5\ud569\ub2c8\ub2e4.",
            session_user: "\uc138\uc158\uc218\uc640 \uc0ac\uc6a9\uc790\uc218\uc5d0 \ub300\ud55c \uc9c0\ud45c\ub97c \uc81c\uacf5\ud569\ub2c8\ub2e4. \uc0ac\uc6a9\uc790\uc218\ub97c \uc77c\uac04/\uc8fc\uac04/\uc6d4\uac04\uc73c\ub85c \uad6c\ubd84\ud574\uc11c \ud655\uc778\ud558\uba74 DAU, WAU, MAU\ub97c \ud655\uc778\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.",
            sessionuser: "\uc138\uc158\uc218\uc640 \uc0ac\uc6a9\uc790\uc218\uc5d0 \ub300\ud55c \uc9c0\ud45c\ub97c \uc81c\uacf5\ud569\ub2c8\ub2e4. \uc0ac\uc6a9\uc790\uc218\ub97c \uc77c\uac04/\uc8fc\uac04/\uc6d4\uac04\uc73c\ub85c \uad6c\ubd84\ud574\uc11c \ud655\uc778\ud558\uba74 DAU, WAU, MAU\ub97c \ud655\uc778\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.",
            tap_un_count: "\uc571 \ub0b4\uc5d0\uc11c \uc0ac\uc6a9\uc790\uac00 \ud0ed\ud588\uc9c0\ub9cc \ubc18\uc751\uc774 \uc5c6\uc5c8\ub358 \ud0ed\uc744 \uce74\uc6b4\ud2b8\ud569\ub2c8\ub2e4.",
            tap_un_ratio: "\uc571 \ub0b4\uc5d0\uc11c \uc0ac\uc6a9\uc790\uac00 \ud588\ub358 \ubaa8\ub4e0 \ud0ed \uc911 \ubc18\uc751\uc774 \uc5c6\uc5c8\ub358 \ud0ed\uc758 \ube44\uc728\uc744 \ud45c\uc2dc\ud569\ub2c8\ub2e4.",
            tech_info: "\uc571\uc744 \uc0ac\uc6a9\ud558\ub294 \uc0ac\uc6a9\uc790\uc758 \uae30\uc220\uc801\uc778 \ud658\uacbd\uc5d0 \ub300\ud55c \ud1b5\uacc4 \uc815\ubcf4\ub97c \ubcf4\uc5ec\uc90d\ub2c8\ub2e4.",
            total_flows: "\uc0ac\uc6a9\uc790\uac00 \uc571 \ub0b4\uc5d0\uc11c \uc774\ub3d9\ud560 \uc218 \uc788\ub294 \uacbd\ub85c\uc911 15\ub2e8\uacc4\uae4c\uc9c0 \uc774\ub3d9\ud55c \uacbd\ub85c\uc758 \uac1c\uc218\ub9cc \uce74\uc6b4\ud2b8\ud569\ub2c8\ub2e4. (\uc911\ubcf5\uacbd\ub85c \uc81c\uc678)",
            total_screens: "\uc571\uc744 \uad6c\uc131\ud558\uace0 \uc788\ub294 \ud654\uba74\uc744 \ub9d0\ud558\uba70 \uc720\uc800\ud574\ube57\uc5d0\uc11c \ubd84\uc11d\uc758 \uae30\ubcf8 \ub2e8\uc704\ub85c \uc218\uc9d1\ud55c \ud654\uba74\uc758 \uac1c\uc218\ub97c \ud45c\uc2dc\ud569\ub2c8\ub2e4.",
            un_tap_count: "\uc571 \ub0b4\uc5d0\uc11c \uc0ac\uc6a9\uc790\uac00 \ud0ed\ud588\uc9c0\ub9cc \ubc18\uc751\uc774 \uc5c6\uc5c8\ub358 \ud0ed\uc744 \uce74\uc6b4\ud2b8\ud569\ub2c8\ub2e4.",
            un_tap_ratio: "\uc571 \ub0b4\uc5d0\uc11c \uc0ac\uc6a9\uc790\uac00 \ud588\ub358 \ubaa8\ub4e0 \ud0ed \uc911 \ubc18\uc751\uc774 \uc5c6\uc5c8\ub358 \ud0ed\uc758 \ube44\uc728\uc744 \ud45c\uc2dc\ud569\ub2c8\ub2e4.",
            userhabit_indicator: "\uc571\uc758 \ud604\uc7ac \uc0c1\ud0dc\ub97c \ubcf4\uc5ec\uc8fc\ub294 \uc9c0\ud45c\ub97c \uc81c\uacf5\ud569\ub2c8\ub2e4."
        },
        flows: {
            all_flow_help_html: "1. \ub370\uc774\ud130\ub294 <b>\uc77c\uc8fc\uc77c</b> \ub2e8\uc704\ub85c \uc81c\uacf5\ub429\ub2c8\ub2e4. <br/><br/>2. \uc804\uccb4 \uc0ac\uc6a9\ud750\ub984 \ucc28\ud2b8\ub294 <b>11\ub2e8\uacc4</b>\uae4c\uc9c0 \ud655\uc778\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.<br/><br/>3. \uc571\uc758 \uc8fc\uc694 \uc0ac\uc6a9\ud750\ub984\uc740 \uac01 \ub2e8\uacc4\ubcc4 <b>\ucd5c\uc0c1\uc704 \ubc15\uc2a4\ub97c \ud074\ub9ad</b>\ud574 \ud655\uc778\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.",
            app_start: "\uc571 \uc2dc\uc791\ubd80\ud130 \uac01 \ub2e8\uacc4\uc5d0 \ud574\ub2f9\ud558\ub294 \ud654\uba74\uae4c\uc9c0 \ub0a8\uc544\uc788\ub294 \uc138\uc158 \ube44\uc728\uc744 \ud45c\uc2dc\ud569\ub2c8\ub2e4.",
            average_screen_moves: "\ud55c \ubc88 \ubc29\ubb38\ud560 \ub54c\ub9c8\ub2e4 \ud3c9\uade0\uc801\uc73c\ub85c \uc5bc\ub9c8\ub098 \uc774\ub3d9\ud558\ub294\uc9c0\uc5d0 \ub300\ud55c \uc9c0\ud45c",
            average_screen_moves_bottom: "\uc774\ub3d9\uc218 / \uc138\uc158\uc218",
            back_button: "\ub4a4\ub85c\uac00\uae30 \ubc84\ud2bc\uc73c\ub85c \ud654\uba74\uc744 \uc774\ub3d9\ud558\uc600\uc2b5\ub2c8\ub2e4.",
            basic_index: "\uc571 \ub0b4\uc5d0 \uc788\ub294 \ud55c \ub2e8\uacc4 \uc804\uccb4 \uacbd\ub85c\uc640 \ub300\ube44\ud558\uc5ec \ud604\uc7ac \uc120\ud0dd\ud55c \uacbd\ub85c\uc5d0 \ub300\ud55c \uc815\ubcf4\ub97c \ud45c\uc2dc\ud569\ub2c8\ub2e4.",
            duplicated_moves: "\uc120\ud0dd\ud55c \uac1c\ubcc4 \uacbd\ub85c\ub97c \ud55c \uc138\uc158\uc5d0\uc11c \uba87 \ubc88\uc774\ub098 \ubc18\ubcf5\uc801\uc73c\ub85c \uac70\uccd0 \uc9c0\ub098\uac14\ub294\uc9c0\uc5d0 \ub300\ud55c \uc815\ubcf4\ub97c \ud45c\uc2dc\ud569\ub2c8\ub2e4.",
            first_screen: "\uc571 \uc2dc\uc791 \ub2e8\uacc4\ub85c \uadf8\ub798\ud504\ub97c \uc774\ub3d9\ud569\ub2c8\ub2e4.",
            graph_full: "\uac00\uc6b4\ub370\ub85c \ub9de\ucd94\uae30",
            graph_slider: "\uc804\uccb4\uacbd\ub85c\uc758 \uc774\ub3d9\uc218\ub97c \uae30\uc900\uc73c\ub85c \uc0c1\uc704 \uba87 \ub370\uc774\ud130\uc758 \ud654\uba74\uacfc \uacbd\ub85c\ub9cc \ud655\uc778\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.",
            object_without_id: "\uc624\ube0c\uc81d\ud2b8 ID\ub97c \uc9c0\uc815\ud558\uba74 \ub354\uc6b1 \uc815\ud655\ud55c \ubd84\uc11d\uacb0\uacfc\ub97c \uc5bb\uc744 \uc218 \uc788\uc2b5\ub2c8\ub2e4.",
            percent_index: "\ucc28\ud2b8\uc5d0 \ud45c\uc2dc\ub41c \uac01 \ud654\uba74\uc758 \uc720\uc785 \ube44\uc728\uc744 \uc571 \uc2dc\uc791 \ud639\uc740 \uc774\uc804\ud654\uba74\uc744 \uae30\uc900\uc73c\ub85c \ud45c\uc2dc\ud569\ub2c8\ub2e4.",
            prev_screen: "\uc774\uc804 \ud654\uba74\uc744 \uae30\uc900\uc73c\ub85c \ub2e4\uc74c \ud654\uba74\uae4c\uc9c0 \ub0a8\uc544\uc788\ub294 \uc138\uc158 \ube44\uc728\uc744 \ud45c\uc2dc\ud569\ub2c8\ub2e4.",
            route_moving_method: "\uc774\ub3d9\ud558\uae30 \uc804 \ud654\uba74\uc5d0\uc11c \uc5b4\ub5a4 \uc624\ube0c\uc81d\ud2b8\ub97c \ud074\ub9ad\ud558\uace0 \ub118\uc5b4\uc654\ub294\uc9c0\uc5d0 \ub300\ud55c \uc815\ubcf4\ub97c \ud45c\uc2dc\ud569\ub2c8\ub2e4.",
            screen_moves: "\uacbd\ub85c\ub97c \uc9c0\ub098\uac04 \ucd1d \ud69f\uc218",
            sessions: "\uacbd\ub85c\ub97c \uc9c0\ub098\uac04 \ucd1d \uc138\uc158\uc218.<br/>(\uc608: \ud55c \uc138\uc158 \uc911\uc5d0 3\ubc88 \uc9c0\ub098\uac14\ub2e4\uba74 1\ub85c \uc9d1\uacc4\ub429\ub2c8\ub2e4.)",
            start_screen: "\uc774\ub3d9\ud55c \ud55c \ub2e8\uacc4 \uacbd\ub85c\uc758 \uc2dc\uc791\ud654\uba74\uc744 \uc758\ubbf8\ud569\ub2c8\ub2e4.",
            swipe: "\uc2a4\uc640\uc774\ud504 \uc561\uc158\uc73c\ub85c \ud654\uba74\uc744 \uc774\ub3d9\ud558\uc600\uc2b5\ub2c8\ub2e4.",
            target_screen: "\uc774\ub3d9\ud55c \ud55c \ub2e8\uacc4 \uacbd\ub85c\uc758 \ub3c4\ucc29\ud654\uba74\uc744 \uc758\ubbf8\ud569\ub2c8\ub2e4.",
            zoom_in_out: "\uadf8\ub798\ud504\uc758 \ub192\uc774\ub97c \ud655\ub300/\ucd95\uc18c\ud569\ub2c8\ub2e4."
        },
        plan: {
            start_pack_over_html: '<span class="color-normal img_warning clear_both"></span> <span class="color-normal">Starter Pack \uae30\uac04 \uc885\ub8cc\uc2dc </span> <span class="color-strong">&nbsp;Startup \ud50c\ub79c&nbsp;</span> <span class="color-normal"> \uc73c\ub85c \uc790\ub3d9</span> <span class="color-normal">\uc9c4\ud589\ub429\ub2c8\ub2e4. \uad81\uae08\ud55c \uc810\uc740 \ubb38\uc758\ud574\uc8fc\uc138\uc694.</span>',
            start_up_over_html: '<span class="color-normal img_warning clear_both"></span> <span class="color-normal">\uc0ac\uc6a9\ub7c9 \ucd08\uacfc\uc2dc \ucd94\uac00\uae08\uc774 \ubc1c\uc0dd\ud569\ub2c8\ub2e4.</span>'
        },
        screenshot: {
            have: "\uc2a4\ud06c\ub9b0\uc0f7 \ud655\uc778\ud558\uae30",
            have_scroll: "\uc2a4\ud06c\ub864\ud654\uba74 \uc2a4\ud06c\ub9b0\uc0f7 \ud655\uc778\ud558\uae30",
            mode: "\uac1c\ubc1c\uc790 SDK\ub97c \uc124\uce58\ud55c \uc571\uc744 \uc2e4\ud589\ud558\uba74 \ubc29\ubb38\ud55c \ud654\uba74\uc758 \uc2a4\ud06c\ub9b0\uc0f7\uc744 \uc790\ub3d9\uc73c\ub85c \uc218\uc9d1\ud569\ub2c8\ub2e4.",
            need_collent: "\ucd94\uac00\ub85c \uc218\uc9d1\ud574\uc57c\ud560 \ud654\uba74\uc774\ub098 \uc6d0\uce58\uc54a\uc740 \uc2a4\ud06c\ub9b0\uc0f7\uc774 \ud3ec\ud568\ub41c \ud654\uba74\uc744 \uccb4\ud06c\ud574\ub450\uba74 \uc571 \ub0b4 \uc218\ub3d9\uc218\uc9d1 \ubaa8\ub4dc\uc5d0\uc11c \ud655\uc778\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.",
            no_have: "\uc218\uc9d1\ub41c \uc2a4\ud06c\ub9b0\uc0f7\uc774 \uc5c6\uc2b5\ub2c8\ub2e4.",
            no_scroll: "\uc218\uc9d1\ub41c \uc2a4\ud06c\ub864\ud654\uba74 \uc2a4\ud06c\ub9b0\uc0f7\uc774 \uc5c6\uc2b5\ub2c8\ub2e4.",
            not_collected: "\uc77c\ubc18\ud654\uba74\uc758 \uc2a4\ud06c\ub9b0\uc0f7 \uc218\uc9d1\uc774 90% \ubbf8\ub9cc\uc785\ub2c8\ub2e4. \uc815\ud655\ud55c \ubd84\uc11d\uc744 \uc704\ud574 \uc2a4\ud06c\ub9b0\uc0f7\uc744 \uc218\uc9d1\ud558\uc138\uc694."
        },
        session_replays: {
            action_count: "\uc571\uc744 \ud55c \ubc88 \ubc29\ubb38\ud574\uc11c \ub098\uac08 \ub54c\uae4c\uc9c0 \uc571 \ub0b4\uc5d0\uc11c \uc561\uc158\ud55c \uc218",
            crashed_sessions: "\ud06c\ub798\uc2dc\uac00 \ub09c \uc138\uc158\ub9cc \ubaa8\uc544\uc11c \ubcfc \uc218 \uc788\ub3c4\ub85d \ud544\ud130\ub9c1\ud569\ub2c8\ub2e4.",
            device: "\uac19\uc740 \ub514\ubc14\uc774\uc2a4\ub97c \uac00\uc9c4 \uc0ac\uc6a9\uc790\uc758 \uc138\uc158\uc744 \uac80\uc0c9\ud569\ub2c8\ub2e4.",
            duration: "\uc571\uc744 \ud55c \ubc88 \ubc29\ubb38\ud574\uc11c \ub098\uac08 \ub54c\uae4c\uc9c0 \uba38\ubb34\ub978 \uc2dc\uac04 (\uae30\uc900: \ucd08)",
            end_screen: "\uc885\ub8cc \ud654\uba74\uc744 \uae30\uc900\uc73c\ub85c \ud544\ud130\ub9c1\ud569\ub2c8\ub2e4.",
            filter_screen: "\uc0ac\uc6a9\uc790\uac00 \uc9c0\ub098\uac04 \ud654\uba74\uc744 \uae30\uc900\uc73c\ub85c \ud544\ud130\ud558\uc5ec \ub9ac\uc2a4\ud2b8\ub97c \ud655\uc778\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.",
            filter_userenv: "\uc0ac\uc6a9\uc790\uac00 \uc571\uc744 \uc0ac\uc6a9\ud558\ub294 \ud658\uacbd\uc5d0 \ub530\ub77c \ud544\ud130\ud558\uc5ec \ub9ac\uc2a4\ud2b8\ub97c \ud655\uc778\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.",
            filter_userexp: "\uc0ac\uc6a9\uc790\uac00 \uc571\uc744 \uc0ac\uc6a9\ud558\uba74\uc11c \ud588\ub358 \ud589\ub3d9\uc5d0 \ub300\ud55c \uacb0\ud5d8\uc744 \ud544\ud130\ud574\uc11c \ub9ac\uc2a4\ud2b8\ub97c \ud655\uc778\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.",
            network_status: "\uc0ac\uc6a9\uc790\uc758 \uc5f0\uacb0\uc0c1\ud0dc\ub97c \uae30\uc900\uc73c\ub85c \uc138\uc158\uc744 \uac80\uc0c9\ud569\ub2c8\ub2e4.",
            screen_filter: "\uc0ac\uc6a9\uc790\uac00 \uc9c0\ub098\uac04 \ud654\uba74\uc744 \uae30\uc900\uc73c\ub85c \ud544\ud130\ud558\uc5ec \ub9ac\uc2a4\ud2b8\ub97c \ud655\uc778\ud574 \ubcfc \uc218 \uc788\uc2b5\ub2c8\ub2e4.",
            screen_name: "\ud2b9\uc815 \ud654\uba74\uc744 \ud3ec\ud568\ud55c \uc138\uc158\uc744 \uae30\uc900\uc73c\ub85c \ud544\ud130\ub9c1\ud569\ub2c8\ub2e4.",
            screen_views: "\uc571\uc744 \ud55c \ubc88 \ubc29\ubb38\ud574\uc11c \ub098\uac08 \ub54c\uae4c\uc9c0 \uc870\ud68c\ud55c \ud654\uba74 \uc218",
            seq_num: "\ud55c \uc0ac\uc6a9\uc790\uac00 \uc571\uc744 \ubc29\ubb38\ud55c \uc218<br/>(\ud55c \uc0ac\uc6a9\uc790\uac00 \uc571\uc744 10 \ubc88 \ubc29\ubb38\ud55c \uacbd\uc6b0, \uc0ac\uc6a9\uacbd\ud5d8\uc740 10\uc73c\ub85c \ud45c\uc2dc\ub429\ub2c8\ub2e4.)",
            session_info: "\uc6d0\ud558\ub294 \uc138\uc158\uc5d0 \ub300\ud55c \uc815\ubcf4\ub97c \ud544\ud130\ud558\uc5ec \ub9ac\uc2a4\ud2b8\ub97c \ud655\uc778\ud574 \ubcfc \uc218 \uc788\uc2b5\ub2c8\ub2e4.",
            start_screen: "\uc2dc\uc791 \ud654\uba74\uc744 \uae30\uc900\uc73c\ub85c \ud544\ud130\ub9c1\ud569\ub2c8\ub2e4.",
            unique_views: "\uc571\uc744 \ud55c \ubc88 \ubc29\ubb38\ud574\uc11c \ub098\uac08 \ub54c\uae4c\uc9c0 \uc870\ud68c\ud55c \ud654\uba74 \uc218 (\uc911\ubcf5 \ud654\uba74 \uc81c\uac70)"
        },
        ui_analysis: {
            action: {
                avg: "\ud604\uc7ac \ud654\uba74\uc744 \ud55c \ubc88 \ubc29\ubb38\ud560 \ub54c\ub9c8\ub2e4 \ud3c9\uade0\uc801\uc73c\ub85c \uba87 \ubc88\uc774\ub098 \uc561\uc158\ud558\ub294\uc9c0\uc5d0 \ub300\ud55c \uc9c0\ud45c",
                avg_tag: "=\ud604\uc7ac \ud654\uba74 \ucd1d \uc561\uc158\uc218 / \uc2a4\ud06c\ub9b0\ubdf0",
                current_1: "\ud604\uc7ac\ud654\uba74\uc744 \uc870\ud68c\ud560 \ub54c\ub9c8\ub2e4 \ud3c9\uade0\uc801\uc73c\ub85c",
                current_2: "\uc5bc\ub9c8\ub098 \uc561\uc158\ud558\ub294\uc9c0\uc5d0 \ub300\ud55c \uc9c0\ud45c",
                max: "\ud654\uba74\ub2f9 \uc561\uc158\uc218\uac00 \uac00\uc7a5 \ud070 \ud654\uba74",
                sum_1: "\ud604\uc7ac\ud654\uba74\uc5d0 \ub4e4\uc5b4\uc640\uc11c \uc0ac\uc6a9\uc790\ub4e4\uc774 \ud65c\ub3d9",
                sum_2: "\ud588\ub358 \ubaa8\ub4e0 \uc561\uc158\uc218\uc758 \ud569",
                total_1: "\ud654\uba74\uc744 \uc870\ud68c\ud560 \ub54c\ub9c8\ub2e4 \ud3c9\uade0\uc801\uc73c\ub85c",
                total_2: "\uc5bc\ub9c8\ub098 \uc561\uc158\ud558\ub294\uc9c0\uc5d0 \ub300\ud55c \uc9c0\ud45c"
            },
            action_analysis: "\uc0ac\uc6a9\uc790\uac00 \ud654\uba74 \ub0b4\uc5d0\uc11c \ud589\ub3d9\ud558\ub294 \uc561\uc158\uc5d0 \ub300\ud55c \ubd84\uc11d\uc744 \uc81c\uacf5\ud569\ub2c8\ub2e4.",
            action_response_ratio: "\ud654\uba74 \ub0b4\uc5d0\uc11c \uc0ac\uc6a9\uc790\uac00 \ud55c \uc561\uc158 \uc911\uc5d0 \ubc18\uc751\uc774 \uc788\uc5c8\ub358 \uc561\uc158\uc758 \ube44\uc728\uc744 \ub098\ud0c0\ub0c5\ub2c8\ub2e4.",
            appadd: {
                select: "\uc571 \uc0dd\uc131\uc2dc \ub4f1\ub85d\ud558\ub294 \uace0\uc720\ud55c ID\ub85c \uac1c\ubc1c\uc790\uc5d0\uac8c \ubb38\uc758\ud558\uc5ec \uc785\ub825\ud574\uc8fc\uc2dc\uae30 \ubc14\ub78d\ub2c8\ub2e4."
            },
            crash: "\ud604\uc7ac \ud654\uba74\uc5d0\uc11c \ubc1c\uc0dd\ud55c \ud06c\ub798\uc2dc \uc218",
            daily_avg: "\ud604\uc7ac \ud654\uba74\uc744 \uc870\ud68c\ud55c \uc0ac\uc6a9\uc790 \uc218\uc758 \uc77c\ud3c9\uade0",
            delete_screenshot: "\ud654\uba74 \uc2a4\ud06c\ub9b0\uc0f7 \uc0ad\uc81c",
            duration: {
                avg: "\ud604\uc7ac \ud654\uba74\uc744 \ud55c \ubc88 \ubc29\ubb38\ud560 \ub54c\ub9c8\ub2e4 \ud3c9\uade0\uc801\uc73c\ub85c \uc5bc\ub9c8\ub098 \uba38\ubb34\ub974\ub294\uc9c0\uc5d0 \ub300\ud55c \uc9c0\ud45c",
                avg_tag: "=\ud604\uc7ac\ud654\uba74 \ucd1d \uccb4\ub958\uc2dc\uac04 / \uc2a4\ud06c\ub9b0\ubdf0",
                current_1: "\ud604\uc7ac\ud654\uba74\uc744 \uc870\ud68c\ud560 \ub54c\ub9c8\ub2e4 \ud3c9\uade0\uc801\uc73c\ub85c \uc5bc\ub9c8\ub098",
                current_2: "\uba38\ubb34\ub974\ub294\uc9c0\uc5d0 \ub300\ud55c \uc9c0\ud45c",
                max: "\ud654\uba74\ub2f9 \uccb4\ub958\uc2dc\uac04\uc774 \uac00\uc7a5 \ud070 \ud654\uba74",
                sum: "\ud604\uc7ac\ud654\uba74\uc5d0 \ub4e4\uc5b4\uc640\uc11c \uc0ac\uc6a9\uc790\ub4e4\uc774 \uba38\ubb3c\ub800\ub358 \uccb4\ub958\uc2dc\uac04\uc758 \ud569",
                total_1: "\ud654\uba74\uc744 \uc870\ud68c\ud560 \ub54c\ub9c8\ub2e4 \ud3c9\uade0\uc801\uc73c\ub85c \uc5bc\ub9c8\ub098",
                total_2: "\uba38\ubb34\ub974\ub294\uc9c0\uc5d0 \ub300\ud55c \uc9c0\ud45c"
            },
            exit_1: "\ud604\uc7ac \ud654\uba74\uc5d0\uc11c \uc885\ub8cc\uac00 \uc77c\uc5b4\ub09c \uc218",
            exit_2: "",
            exit_bottom: "\ud604\uc7ac \ud654\uba74 \uc885\ub8cc \uc218",
            modify_alias: "\ud654\uba74\uc774\ub984 \uc218\uc815",
            move_frequency: "\uc120\ud0dd\ud55c \ud654\uba74\uc758 \uc804\ud6c4\ud654\uba74\uc744 \uc0ac\uc6a9\uc790\uac00 \uc774\ub3d9\ud55c \ud69f\uc218\ub97c \uae30\uc900\uc73c\ub85c \uc815\ub82c\ud558\uc5ec \ubcf4\uc5ec\uc90d\ub2c8\ub2e4.",
            next: "\ud604\uc7ac \uc120\ud0dd\ud55c \ud654\uba74\uc5d0\uc11c \uc5b4\ub5a4 \ud654\uba74\uc73c\ub85c \ub9ce\uc774 \uc774\ub3d9\ud588\ub294\uc9c0 \uc815\ub82c\ud574 \ubcfc \uc218 \uc788\uc2b5\ub2c8\ub2e4.",
            no_action: "\ud604\uc7ac \ud654\uba74\uc5d0\uc11c \uc0ac\uc6a9\uc790\uac00 \ud558\ub294 \ubaa8\ub4e0 \ud0ed \uc911\uc5d0 \ubc18\uc751\uc774 \uc5c6\uc5c8\ub358 \ud0ed\uc758 \ube44\uc728",
            object_list: "\ud654\uba74\uc744 \uad6c\uc131\ud558\uace0 \uc788\ub294 \uc624\ube0c\uc81d\ud2b8\uac00 \uac01\uac01 \uc5bc\ub9c8\ub098 \uc0ac\uc6a9\ub418\uc5c8\ub294\uc9c0\uc5d0 \ub300\ud55c \uc9c0\ud45c\uc785\ub2c8\ub2e4.",
            object_response_ratio: "\ud654\uba74\uc744 \uad6c\uc131\ud558\uace0 \uc788\ub294 \uc624\ube0c\uc81d\ud2b8\uac00 \uc5bc\ub9c8\ub098 \uc0ac\uc6a9\ub418\uc5c8\ub294\uc9c0\uc5d0 \ub300\ud55c \uc9c0\ud45c\uc785\ub2c8\ub2e4.",
            object_tracking: "\uc624\ube0c\uc81d\ud2b8\ub294 \ud654\uba74\uc744 \uad6c\uc131\ud558\uace0 \uc788\ub294 \uc694\uc18c\ub97c \uc758\ubbf8\ud569\ub2c8\ub2e4. \uc0ac\uc6a9\uc790\uac00 \uac01\uac01\uc758 \uc624\ube0c\uc81d\ud2b8\uc5d0 \uc5b4\ub5a4 \ubc18\uc751\uc744 \ud588\ub294\uc9c0 \uc54c \uc218 \uc788\uc2b5\ub2c8\ub2e4.",
            objects: "\ub2e4\ub978 \ud654\uba74\uc744 \uac70\uce58\uc9c0 \uc54a\uace0 \ubc14\ub85c \uc774\ub3d9\ud558\ub294 \ud55c \ub2e8\uacc4(\uc9c1\ud56d)\uc758 \uacbd\ub85c\ub97c \uc0c1\uc138\ud558\uac8c \ubd84\uc11d\ud574 \ubcfc \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uc218\ub9ce\uc740 \ud55c \ub2e8\uacc4 \uacbd\ub85c\uc911\uc5d0 \ub9ce\uc774 \uc9c0\ub098\uac00\uac70\ub098 \ubd90\ube44\ub294 \uacbd\ub85c\ub97c \uc54c \uc218 \uc788\uc2b5\ub2c8\ub2e4.",
            previous: "\uc5b4\ub5a4 \ud654\uba74\uc5d0\uc11c \ud604\uc7ac \uc120\ud0dd\ud55c \ud654\uba74\uc73c\ub85c \ub9ce\uc774 \uc774\ub3d9\ud574 \uc654\ub294\uc9c0 \uc815\ub82c\ud574 \ubcfc \uc218 \uc788\uc2b5\ub2c8\ub2e4.",
            ranking: {
                actions: "\ud604\uc7ac \ud654\uba74\uc744 \ud55c \ubc88 \ubc29\ubb38\ud560 \ub54c\ub9c8\ub2e4 \ud3c9\uade0\uc801\uc73c\ub85c \uba87 \ubc88\uc774\ub098 \uc561\uc158\ud558\ub294\uc9c0\uc5d0 \ub300\ud55c \uc9c0\ud45c",
                actions_bottom: "=\ud604\uc7ac\ud654\uba74 \ucd1d \uc561\uc158\uc218 / \uc2a4\ud06c\ub9b0\ubdf0",
                crashed: "\ud604\uc7ac \ud654\uba74\uc5d0\uc11c \ubc1c\uc0dd\ud55c \ud06c\ub798\uc2dc \uc218",
                exited: "\ud604\uc7ac \ud654\uba74\uc5d0\uc11c \uc885\ub8cc\uac00 \uc77c\uc5b4\ub09c \uc218",
                screen_views: "\ud604\uc7ac \ud654\uba74\uc744 \uc0ac\uc6a9\uc790\uac00 \uc870\ud68c\ud55c \uc218",
                sessions: "\ud604\uc7ac \ud654\uba74\uc5d0 \uc811\uc18d\ud55c \uc0ac\uc6a9\uc790\uac00 \uc571\uc744 \uc2dc\uc791\ud574\uc11c \uc885\ub8cc\ud55c \uc218",
                taps_un: "\ud604\uc7ac \ud654\uba74\uc5d0\uc11c \uc0ac\uc6a9\uc790\uac00 \ud558\ub294 \ubaa8\ub4e0 \ud0ed \uc911\uc5d0 \ubc18\uc751\uc774 \uc5c6\uc5c8\ub358 \ud0ed\uc758 \ube44\uc728",
                taps_un_bottom: "=\ud604\uc7ac\ud654\uba74 \ubb34\ubc18\uc751 \ud0ed \uc218 / \ud604\uc7ac\ud654\uba74 \ucd1d \ud0ed \uc218",
                total_duration: "\ud604\uc7ac \ud654\uba74\uc744 \ud55c \ubc88 \ubc29\ubb38\ud560 \ub54c\ub9c8\ub2e4 \ud3c9\uade0\uc801\uc73c\ub85c \uc5bc\ub9c8\ub098 \uba38\ubb34\ub974\ub294\uc9c0\uc5d0 \ub300\ud55c \uc9c0\ud45c",
                total_duration_bottom: "=\ud604\uc7ac\ud654\uba74 \ucd1d \uccb4\ub958\uc2dc\uac04 / \uc2a4\ud06c\ub9b0\ubdf0",
                unique_users: "\ud604\uc7ac \ud654\uba74\uc744 \uc870\ud68c\ud55c \uc0ac\uc6a9\uc790 \uc218\uc758 \uc77c\ud3c9\uade0"
            },
            screen_indicators: "\uc120\ud0dd\ud55c \ud654\uba74\uc744 \uae30\uc900\uc73c\ub85c \uc5bc\ub9c8\ub098 \uac00\uce58\uac00 \uc788\ub294 \ud654\uba74\uc778\uc9c0\ub97c \uc9c4\ub2e8\ud558\ub294 8\uac00\uc9c0 \uc9c0\ud45c\ub97c \ubcf4\uc5ec\uc90d\ub2c8\ub2e4.",
            screen_per_session: "\uc571\uc744 \ud55c \ubc88 \ubc29\ubb38\ud560 \ub54c \ud604\uc7ac \ud654\uba74\uc744 \uba87 \ubc88\uc774\ub098 \ubc29\ubb38\ud558\ub294\uc9c0\uc5d0 \ub300\ud55c \uc9c0\ud45c",
            screen_per_session_explain: "= \uc2a4\ud06c\ub9b0\ubdf0 / \uc138\uc158\uc218",
            screen_per_session_tag: "=\ud604\uc7ac\ud654\uba74 \uc2a4\ud06c\ub9b0\ubdf0 / \ud604\uc7ac\ud654\uba74 \uc138\uc158\uc218",
            screen_select_html: "\uac01 \uadf8\ub798\ud504 \ube44\uc728 \ud45c\uc2dc\uc758 \ucd5c\ub300\uce58 \uae30\uc900<br/>-<b>1\uc704\ud654\uba74</b>: \uc9c0\ud45c\ubcc4 \uc804\uccb4\ud654\uba74 \uc911 1\uc704\ud654\uba74(\ucd5c\ub300) \uac12<br/>-<b>\uc804\uccb4\ud654\uba74</b>: \uc9c0\ud45c\ubcc4 \uc804\uccb4\ud654\uba74 \uc218\uce58\uc758 \ud569\uacc4",
            screen_view: "\ud604\uc7ac \ud654\uba74\uc744 \uc0ac\uc6a9\uc790\uac00 \uc870\ud68c\ud55c \uc218",
            select_screenshot: "\ud654\uba74 \uc2a4\ud06c\ub9b0\uc0f7 \ubd88\ub7ec\uc624\uae30",
            session: "\ud604\uc7ac \ud654\uba74\uc5d0 \uc811\uc18d\ud55c \uc0ac\uc6a9\uc790\uac00 \uc571\uc744 \uc2dc\uc791\ud574\uc11c \uc885\ub8cc\ud55c \uc218",
            tap_response_ratio: "\uc0ac\uc6a9\uc790\uac00 \ud55c \uc561\uc158(\ud0ed)\uc774 \uc5bc\ub9c8\ub098 \ubc18\uc751\ud588\ub294\uc9c0 \ub098\ud0c0\ub0c5\ub2c8\ub2e4."
        }
    },
    unauthorized: {
        manage: {
            all: "\ud5c8\uac00\ub418\uc9c0 \uc54a\uc740 \uc811\uadfc\uc785\ub2c8\ub2e4.",
            user: "Not allowed to manage other user accounts."
        },
        update: {
            project: "Not allowed to update this project."
        }
    },
    units: {
        count: "\uac1c",
        k_cost: "\uc6d0",
        member: "\uba85",
        minute: "\ubd84",
        month: "\uc6d4",
        more: "\uc774\uc0c1",
        n_th: "\ubc88\uc9f8",
        rank: "\uc704",
        rank_over: "\uc21c\uc704 \ubc16",
        second: "\ucd08",
        session_count: "\ud68c",
        step: "\ub2e8\uacc4",
        step_x: "%{count}\ub2e8\uacc4",
        total: "\ucd1d"
    },
    user_voice: {
        hint: "\uc11c\ube44\uc2a4\uc5d0 \ub300\ud55c \uad81\uae08\ud55c \uc810\uc774\ub098 \uc758\uacac\uc774 \uc788\uc73c\uc2dc\uba74 \ub0a8\uaca8\uc8fc\uc138\uc694.",
        title: "\ubb34\uc5c7\uc774\ub4e0 \ubb3c\uc5b4\ubcf4\uc138\uc694"
    },
    uservoice: {
        category: {
            error: "\uc624\ub958 \ubcf4\uace0",
            etc: "\uae30\ud0c0",
            payment: "\ud50c\ub79c \ubc0f \uacb0\uc81c\uad00\ub828",
            sdk: "SDK \uc5f0\ub3d9",
            service: "\uc11c\ube44\uc2a4 \ubb38\uc758",
            title: "\uce74\ud14c\uace0\ub9ac"
        },
        company_name: "\ud68c\uc0ac\uba85",
        manager_name: "\ub2f4\ub2f9\uc790\uba85",
        require_purpose: "\uc720\uc800\ud574\ube57\uc5d0 \ub300\ud574 \uad81\uae08\ud55c \uc810"
    },
    views: {
        pagination: {
            first: "\ucc98\uc74c",
            last: "\ub9c8\uc9c0\ub9c9",
            next: ">",
            previous: "<",
            truncate: "&hellip;"
        }
    },
    words: {
        "account-setting": "\uacc4\uc815 \uc124\uc815",
        account_tab: "\uacc4\uc815 \uc815\ubcf4",
        add_member: "\uba64\ubc84\ucd94\uac00",
        age: "\ub098\uc774",
        alias: "\ubcc4\uce6d",
        all: "\uc804\uccb4",
        api_key: "API \ud0a4",
        "apikeys-tab": "API\ud0a4 \ub9ac\uc2a4\ud2b8",
        app_version: "\uc571\ubc84\uc804",
        apply: "\uc801\uc6a9",
        average: "\ud3c9\uade0",
        base_analysis: "\uae30\ubcf8\ubd84\uc11d",
        based_on: "\uae30\uc900",
        battery: "\ubc30\ud130\ub9ac",
        bg_color: "\ubc30\uacbd\uc0c9",
        blog: "\ube14\ub85c\uadf8",
        cancel: "\ucde8\uc18c",
        card_type: "\uce74\ub4dc\ud615",
        ceo: "CEO",
        change: "\ubcc0\uacbd",
        change_email: "\uc774\uba54\uc77c \ubcc0\uacbd",
        change_manager: "\uad00\ub9ac\uc790 \ubcc0\uacbd",
        close: "\ub2eb\uae30",
        company: "\ud68c\uc0ac\uc18c\uac1c",
        complete: "\uc644\ub8cc",
        confirm: "\ud655\uc778",
        contact: "\ubb38\uc758\ud558\uae30",
        contact_us: "\ubb38\uc758\ud558\uae30",
        content: "\ub0b4\uc6a9",
        copy: "\ubcf5\uc0ac",
        copy_link: "\ub9c1\ud06c\ubcf5\uc0ac",
        count: "\uc218",
        counting: "\uac1c",
        country: "\uad6d\uac00",
        crash: "\ud06c\ub798\uc2dc",
        created_day: "\uc0dd\uc131\uc77c",
        current: "\ud604\uc7ac",
        custom: "\uc0ac\uc6a9\uc790 \uc815\uc758",
        custom_date_html: "\uc0ac\uc6a9\uc790 \uc815\uc758 <span>(\ucd5c\ub300 60\uc77c)</span>",
        customer_support: "\uace0\uac1d \uc9c0\uc6d0",
        data_analyst: "\ub370\uc774\ud130 \ubd84\uc11d\uac00",
        date: "\ub0a0\uc9dc",
        day: "\uc77c",
        days_0: "\uc77c",
        days_1: "\uc6d4",
        days_2: "\ud654",
        days_3: "\uc218",
        days_4: "\ubaa9",
        days_5: "\uae08",
        days_6: "\ud1a0",
        decrease: "\uac10\uc18c",
        description: "\uc124\uba85",
        detail: "\uc0c1\uc138",
        developer: "\uac1c\ubc1c\uc790",
        developer_key: "\uac1c\ubc1c\uc790 API \ud0a4",
        developer_mode: "Test \ubaa8\ub4dc",
        developer_mode_short: "Test",
        device: "\ub514\ubc14\uc774\uc2a4",
        diff: "\ub300\ube44",
        distribution: "\ubd84\ud3ec",
        down: "\uc544\ub798\ucabd",
        edit: "\uc218\uc815",
        edit_save: "\ubcc0\uacbd\ub0b4\uc6a9 \uc800\uc7a5",
        email: "\uc774\uba54\uc77c",
        etc: "\uae30\ud0c0",
        event: "\uc774\ubca4\ud2b8",
        "false": "\ub044\uae30",
        female: "\uc5ec\uc131",
        filename: "\ud30c\uc77c\uba85",
        filter: "\ud544\ud130",
        from_date: "\uc2dc\uc791\uc77c",
        gender: "\uc131\ubcc4",
        get_started: "\uc720\uc800\ud574\ube57 \uc2dc\uc791\ud558\uae30",
        go_home: "< \ud648\uc73c\ub85c \uc774\ub3d9",
        heatmap: "\ud788\ud2b8\ub9f5",
        heatmap_scroll: "\ud788\ud2b8\ub9f5 & \uc2a4\ud06c\ub864 \ubd84\uc11d",
        height: "\ub192\uc774",
        help: "\ub3c4\uc6c0\ub9d0",
        high: "\ub192\uc74c",
        identifier: "\uc2dd\ubcc4 \ucf54\ub4dc",
        "in": "\uc911",
        increase: "\uc99d\uac00",
        interaction: "\uc561\uc158",
        interaction_count: "\uc561\uc158\uc218",
        kind: "\uc885\ub958",
        language: "\uc5b8\uc5b4",
        last30days: "\uc9c0\ub09c 30\uc77c\uac04",
        last60days: "\uc9c0\ub09c 60\uc77c\uac04",
        last7days: "\uc9c0\ub09c 7\uc77c\uac04",
        lastmonth: "\uc800\ubc88 \ub2ec",
        left: "\uc67c\ucabd",
        legend: "\ubc94\ub840",
        less_second: "1\ucd08 \ubbf8\ub9cc",
        list_type: "\ub9ac\uc2a4\ud2b8\ud615",
        loading: "\ub85c\ub529\uc911...",
        login: "\ub85c\uadf8\uc778",
        logout: "\ub85c\uadf8\uc544\uc6c3",
        low: "\ub0ae\uc74c",
        male: "\ub0a8\uc131",
        manage_member: "\uba64\ubc84 \uad00\ub9ac",
        management: "\uad00\ub9ac",
        manager: "\uad00\ub9ac\uc790",
        mapping_file: "\ub9f5\ud551 \ud30c\uc77c",
        marketer: "\ub9c8\ucf00\ud130",
        maximum: "\ucd5c\ub300\uac12",
        member: "\uba64\ubc84",
        message: "\ub0b4\uc6a9",
        minimum: "\ucd5c\uc18c\uac12",
        move: "\ubc14\ub85c\uac00\uae30",
        move_to_prd: "Production \ubaa8\ub4dc\ub85c \uc774\ub3d9",
        moving_count: "\uc774\ub3d9\uc218",
        name: "\uc774\ub984",
        "new": "\uc0c8",
        new_privacy: "\uac1c\uc815\ud6c4 \uac1c\uc778\uc815\ubcf4 \ucde8\uae09\ubc29\uce68",
        new_term: "\uac1c\uc815\ud6c4 userhabit \uc774\uc6a9\uc57d\uad00",
        next: "\ub2e4\uc74c",
        no_data: "\ub370\uc774\ud130 \uc5c6\uc74c",
        none: "\uc5c6\uc74c",
        not_selected: "\uc120\ud0dd\uc548\ud568",
        notice: "\uc54c\ub78c",
        obfuscation_mapping: "\ub09c\ub3c5\ud654 \ub9f5\ud551",
        object: "\uc624\ube0c\uc81d\ud2b8",
        old_privacy: "\uac1c\uc815\uc804 \uac1c\uc778\uc815\ubcf4 \ucde8\uae09\ubc29\uce68",
        old_term: "\uac1c\uc815\uc804 userhabit \uc774\uc6a9\uc57d\uad00",
        one_month: "\ud55c \ub2ec",
        one_week: "\uc77c\uc8fc\uc77c",
        others: "\uae30\ud0c0",
        over: "\uc774\uc0c1",
        overall: "\uc804\uccb4",
        page: "\ud398\uc774\uc9c0",
        password: "\ube44\ubc00\ubc88\ud638 \ubcc0\uacbd",
        "password-tab": "\ube44\ubc00\ubc88\ud638",
        "payment-setting": "\ud50c\ub79c \ubcc0\uacbd",
        payment_tab: "\uacb0\uc81c \uc815\ubcf4",
        period: "\uae30\uac04",
        phone: "\uc804\ud654",
        plan: "\ud50c\ub79c",
        platform: "\ud50c\ub7ab\ud3fc",
        play: "\uc7ac\uc0dd",
        pm: "\ud504\ub85c\uc81d\ud2b8 \ub9e4\ub2c8\uc800",
        previous: "\uc774\uc804",
        privacy: "\uac1c\uc778\uc815\ubcf4 \ucde8\uae09\ubc29\uce68",
        production_key: "\uc81c\ud488 API \ud0a4",
        production_mode: "Production \ubaa8\ub4dc",
        production_mode_short: "Production",
        ranking: "\uc21c\uc704",
        ratio: "\ube44\uc728",
        recent: "\ucd5c\uadfc",
        refresh: "\uc0c8\ub85c\uace0\uce68",
        remain_date: "\uc794\uc5ec\uae30\uac04",
        reset: "\ucd08\uae30\ud654",
        resolution: "\ud574\uc0c1\ub3c4",
        right: "\uc624\ub978\ucabd",
        role: "\uad8c\ud55c",
        save_editing: "\ubcc0\uacbd\ub0b4\uc6a9 \uc800\uc7a5",
        save_password: "\ube44\ubc00\ubc88\ud638 \ubcc0\uacbd",
        screen_count: "\ud654\uba74\uc774\ub3d9\uc218",
        screen_name: "\ud654\uba74\uc774\ub984",
        screen_view: "\uc2a4\ud06c\ub9b0\ubdf0",
        search: "\uac80\uc0c9",
        search_screen: "\ud654\uba74\uc774\ub984",
        second: "\ucd08",
        select: "(\uc120\ud0dd)",
        selected: "\uc120\ud0dd",
        send: "\ubb38\uc758\ud558\uae30",
        send_invite_mail: "\ucd08\ub300\uba54\uc77c \ubc1c\uc1a1",
        seq_num: "\uc0ac\uc6a9\uacbd\ud5d8",
        service_guide: "SDK \uac00\uc774\ub4dc",
        session: "\uc138\uc158",
        session_limit: "\uc138\uc158 \uc81c\ud55c",
        session_rate: "\uc138\uc158 \ube44\uc728",
        setting: "\uc124\uc815",
        sign_up: "\ud68c\uc6d0 \uac00\uc785",
        source_code: "\uc18c\uc2a4 \ucf54\ub4dc",
        starred: "\uc990\uaca8\ucc3e\uae30",
        start: "\uc2dc\uc791",
        status: "\uc0c1\ud0dc",
        submit: "\ud655\uc778",
        submitting_new_app: "\uc9c4\ud589\uc911",
        sum: "\ud569\uacc4",
        target: "\ubaa9\ud45c",
        term: "\uc774\uc6a9\uc57d\uad00",
        thismonth: "\uc774\ubc88 \ub2ec",
        times: "\ud68c",
        to_date: "\uc885\ub8cc\uc77c",
        today: "\uc624\ub298",
        top: "\uc0c1\uc704",
        "true": "\ucf1c\uae30",
        type: "\uc720\ud615",
        unlimited: "\ubb34\uc81c\ud55c",
        up: "\uc704\ucabd",
        upload: "\uc5c5\ub85c\ub4dc",
        usage_count: "\uc0ac\uc6a9\ud69f\uc218",
        use_date: "\uc0ac\uc6a9\uae30\uac04",
        use_sv: "\uc0ac\uc6a9\ub7c9",
        users: "\uc0ac\uc6a9\uc790",
        ux_designer: "UX \ub514\uc790\uc774\ub108",
        version: "\ubc84\uc804",
        vst: "\ubd80\uac00\uac00\uce58\uc138",
        width: "\ub113\uc774"
    }
});
