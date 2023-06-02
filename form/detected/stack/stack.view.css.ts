namespace $.$$ {
  $mol_style_define($scale_form_detected_stack, {
    Detected_auto_stack: { flexDirection: "row", flexWrap: "wrap" },
    Detected_auto_link: { height: "fit-content" },
    Detected_auto_drop: {
      "@": {
        mol_drop_status: {
          drag: {
            boxShadow: `0 -1px 0 0px ${$mol_theme.focus}`,
          },
        },
      },
    },

    List_drop: {
      "@": {
        mol_drop_status: {
          drag: {
            ">": {
              $mol_view: {
                ":last-child": {
                  boxShadow: `0 1px 0 0px ${$mol_theme.focus}`,
                },
              },
            },
          },
        },
      },
    },

    Trash: {
      padding: $mol_gap.block,
      display: "block",
    },

    Trash_drop: {
      opacity: 0.2,
      "@": {
        mol_drop_status: {
          drag: {
            background: {
              color: $mol_theme.hover,
            },
            opacity: 1,
          },
        },
      },
    },
    Detected_number: { pointerEvents: "none" },
    Detected_direction: { pointerEvents: "none" },
    Tools: { display: "flex" },
  });
}
