<template>
  <div
    class="btn"
    :class="{
      'grey-btn': color === 'grey',
      'white-btn': color === 'white',
      'red-btn': color === 'red',
      'outline-btn': color === 'outline',
      'white-btn no-shadow': color === 'white-noshadow',
      'white-btn no-shadow check-positive':
        color === 'white-noshadow-check-pos',
      'ume-spinner': spinner,
      'btn-disabled': disabled
    }"
    @click="disabled ? null : $emit('buttonClick')"
    :style="styleObject"
  >
    <span v-if="open">
      <a :href="open" :target="target ? target : '_self'">
        <slot />
      </a>
    </span>
    <span v-else>
      <slot />
    </span>
  </div>
</template>
<script>
export default {
  props: {
    color: {
      type: String,
      required: true
    },
    disabled: {
      type: Boolean,
      required: false
    },
    spinner: {
      type: Boolean,
      required: false
    },
    open: {
      type: String,
      required: false
    },
    maxWidth: {
      type: Number,
      required: false
    },
    target: {
      type: String,
      required: false
    }
  },
  data() {
    return {
      styleObject: {
        "max-width": this.maxWidth + "px"
      }
    };
  }
};
</script>
<style lang="scss">
#app {
  .btn {
    background-color: #e60000;
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.6);
    width: 100%;
    color: #ffffff;
    font-family: VodafoneBd;
    font-size: 16px;
    line-height: 20px;
    text-align: center;
    a:any-link:not(.btn) {
      text-decoration: none;
      font-family: VodafoneBd;
      font-weight: normal;
    }
  }

  .btn:hover {
    background-color: #990000;
  }
  .btn:active {
    background-color: #bd0000;
    box-shadow: inset 0 1px 3px 0 rgba(0, 0, 0, 0.5);
  }

  .btn.grey-btn {
    background-color: #333333;
  }
  .btn.grey-btn:hover {
    background-color: #000000;
  }
  .btn.grey-btn:active {
    background-color: #4a4d4e;
  }

  .btn.white-btn {
    color: #4a4d4e;
    background-color: #ffffff;
  }
  .btn.white-btn:hover {
    background-color: #ebebeb;
  }
  .btn.white-btn:active {
    background-color: #f4f4f4;
  }
  .btn.no-shadow {
    border-top: 1px solid #ccc;
    box-shadow: none;
  }

  .btn.check-positive::before {
    font-family: ume-icons;
    content: "";
    display: inline-block;
    width: 1.5em;
    text-align: left;
    vertical-align: -12%;
    font-size: 22px;
    width: 2.5rem;
  }

  .light-bg .btn.outline-btn,
  .btn.outline-btn {
    border: 1px solid #333333;
    background: rgba(0, 0, 0, 0);
    color: #333333;
  }
  .light-bg .btn.outline-btn:active,
  .light-bg .btn.outline-btn:hover,
  .btn.outline-btn:active,
  .btn.outline-btn:hover {
    color: #4a4d4e;
    border: 1px solid #afafaf;
    box-shadow: none;
  }
  .dark-bg .btn.outline-btn {
    border: 1px solid #ffffff;
    background: rgba(0, 0, 0, 0);
    color: #ffffff;
  }
  .dark-bg .btn.outline-btn:active,
  .dark-bg .btn.outline-btn:hover,
  .btn.outline-btn:active,
  .btn.outline-btn:hover {
    color: #4a4d4e;
    border: 1px solid #afafaf;
    box-shadow: none;
  }

  .btn:disabled,
  .btn--disabled,
  .grey-btn.disabled,
  .grey-btn.disabled:active,
  .grey-btn.disabled:hover,
  .red-btn.disabled,
  .red-btn.disabled:active,
  .red-btn.disabled:hover,
  .white-btn.disabled,
  .white-btn.disabled:active,
  .white-btn.disabled:hover {
    background-color: #cccccc;
    color: #999999;
    box-shadow: none;
  }

  @media screen and (max-width: 479px) {
    .btn {
      width: 100%;
    }
  }
}
</style>
