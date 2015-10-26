require 'test_helper'

class StaticPagesControllerTest < ActionController::TestCase
  test "should get home" do
    get :home
    assert_response :success
  end

  test "should get about" do
    get :about
    assert_response :success
  end

  test "should get issues" do
    get :issues
    assert_response :success
  end

  test "should get partnership" do
    get :partnership
    assert_response :success
  end

  test "should get support" do
    get :support
    assert_response :success
  end

  test "should get directory" do
    get :directory
    assert_response :success
  end

  test "should get studies" do
    get :studies
    assert_response :success
  end

end
