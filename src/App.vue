<template>
  <v-app>
    <!-- 앱바 테마를 primary로 설정 -->
    <v-app-bar app color="primary" dark>
      <!-- 좌측에 메뉴 아이콘 생성 -->
      <v-app-bar-nav-icon></v-app-bar-nav-icon>
      <v-toolbar-title>멀티 페이지</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn to='/main'>
        main
      </v-btn>
      <v-btn to='/sub'>
        sub
      </v-btn>
      <v-btn icon>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>
    </v-app-bar>
     <!-- <v-app-bar>
     </v-app-bar> -->
    
    <v-main>
      <v-container class="display-1">
        <router-link to="/" class="mr-5">Home</router-link>
        <router-link to="/main" class="mr-5">Main</router-link>
        <router-link to="/sub" class="mr-5">Sub</router-link>
      </v-container>
      <!-- 페이지 장면전환 효과 -->
      <v-slide-x-transition mode="out-in">
        <router-view></router-view>
      </v-slide-x-transition>
    </v-main>
    <!-- Footer 영역 테마를 secondary로 설정 -->
    <v-footer color="secondary" fixed dark>
      <div class="mx-auto">Create By VueJS</div>
    </v-footer>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    //
  }),
};
</script>
