using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace TestQuest.Migrations
{
    /// <inheritdoc />
    public partial class testdb2 : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "AnswerID",
                table: "AnswersWorker");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "AnswerID",
                table: "AnswersWorker",
                type: "integer",
                nullable: false,
                defaultValue: 0);
        }
    }
}
