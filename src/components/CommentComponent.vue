<template>
  <div>
    <div class="comment-session">
      <div class="comments-list">
        <div v-if="comments.length === 0">There are no comments yet.</div>
        <div class="q-pa-md row justify-center" v-for="comment in comments" :key="comment._id">
          <div style="width: fit-content; max-width: calc(100% - 20px); margin-right: auto; display: flex; gap: 20px; justify-content: center; align-items: center;">
            <q-chat-message
              v-if="!isEditing[comment._id]"
              name="Jane"
              avatar="https://cdn.quasar.dev/img/avatar5.jpg"
              :text="[comment.content]"
              :stamp="new Date(comment.created_by_date).toLocaleDateString()"
              size="8"
              text-color="white"
              bg-color="primary"
            />

            <q-input
              v-if="isEditing[comment._id]"
              v-model="editContent[comment._id]"
              type="text"
              :dense="dense"
              outlined
              label="Edit your comment"
            />

            <q-btn
              v-if="isEditing[comment._id]"
              @click="updateComment(comment._id)"
              label=""
              icon="check"
              color="secondary"
            />


            <q-btn
              color="primary"

            >
              <i class="fa-solid fa-gear"></i>
              <q-menu>
                <q-list style="min-width: 100px">
                  <q-item clickable v-close-popup @click="toggleEdit(comment._id)">
                    <q-item-section>Edit</q-item-section>
                  </q-item>
                  <q-separator />
                  <q-item clickable v-close-popup @click="confirmDelete(comment._id)">
                    <q-item-section>Delete</q-item-section>
                  </q-item>
                  <q-separator />
                </q-list>
              </q-menu>
            </q-btn>

          </div>
        </div>
      </div>

      <q-input outlined bottom-slots v-model="comment" :dense="dense" placeholder="Enter your comment...">
        <template v-slot:before>
          <q-avatar>
            <img src="https://cdn.quasar.dev/img/avatar5.jpg">
          </q-avatar>
        </template>
        <template v-slot:append>
          <q-icon name="send" @click="submitComment" />
        </template>
      </q-input>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'CommentComponent',
  data() {
    return {
      comment: '',
      comments: [],
      isEditing: {},
      editContent: {},
      post_id: '1'
    }
  },
  methods: {
    async fetchComments() {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.get(`https://apidev.hitc.vn/mocommentapithuctap/api/comments/get-paging/${this.post_id}?sort=0`, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        this.comments = response.data.data.sort((a, b) => new Date(b.created_by_date) - new Date(a.created_by_date));
      } catch (error) {
        console.error('Lỗi khi lấy bình luận:', error);
      }
    },

    async submitComment() {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.post('https://apidev.hitc.vn/mocommentapithuctap/api/comments/create', {
          content: this.comment,
          post_id: this.post_id
        }, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });

        this.comments.unshift(response.data.data);
        this.comment = '';
      } catch (error) {
        console.error('Lỗi khi gửi bình luận:', error);
      }
    },

    toggleEdit(commentId) {
      this.isEditing[commentId] = !this.isEditing[commentId];
      if (this.isEditing[commentId]) {
        this.editContent[commentId] = this.comments.find(c => c._id === commentId).content;
      }
    },

    async updateComment(commentId) {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.put(`https://apidev.hitc.vn/mocommentapithuctap/api/comments/update/${commentId}`, {
          content: this.editContent[commentId],
        }, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });

        const updatedCommentIndex = this.comments.findIndex(c => c._id === commentId);
        if (updatedCommentIndex !== -1) {
          this.comments[updatedCommentIndex].content = this.editContent[commentId];
        }
        this.isEditing[commentId] = false;
      } catch (error) {
        console.error('Lỗi khi cập nhật bình luận:', error);
      }
    },

    confirmDelete(commentId) {
      if (confirm('Are you sure you want to delete this comment?')) {
        this.deleteComment(commentId);
      }
    },

    async deleteComment(commentId) {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.delete(`https://apidev.hitc.vn/mocommentapithuctap/api/comments/delete/${commentId}`, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        this.comments = this.comments.filter(c => c._id !== commentId);
      } catch (error) {
        console.error('Lỗi khi xóa bình luận:', error);
      }
    }
  },

  mounted() {
    this.fetchComments();
  }
}
</script>

<style src="src/css/comment.css"></style>
<style scoped>
@media (min-width: 0px) {
  .row > .col-8, .row > .col-xs-8 {
    height: auto;
    width: fit-content;
    max-width: calc(90% - 20px);
  }
}
</style>
